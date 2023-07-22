import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiCalls from '../../../services/user/apiCalls';
import UserAvatar from '../ProfileComponent/UserAvatar';
import { HeartIcon ,PaperAirplaneIcon,EllipsisHorizontalIcon} from '@heroicons/react/24/solid';

interface Comment {
  _id: string;
  postId: string;
  comment: string;
  userId: {
    _id: string;
    username: string;
    profilePic: string;
  };
  likes: string[];
  replies: Comment[]; // Add this field for nested comments
}

interface Props {
  postId: string;
  newComment: string;
  currentUser: string;
  cb: (value: any) => void;
}

const ShowComment = ({ postId, newComment, currentUser, cb }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [replied, setReplied] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  cb(comments.length);

  useEffect(() => {
    getComments();
  }, [postId, newComment]);

  const getComments = async () => {
    try {
      const { comments } = await apiCalls.GetComment(postId);
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id: string) => {
    toast.warning('Are you sure you want to delete this comment?', {
      position: 'top-center',
      autoClose: false,
      closeOnClick: false,
      draggable: true,
      closeButton: (
        <button className="btn btn-warning" onClick={() => confirmDelete(id)}>
          Confirm
        </button>
      ),
      onClose: () => {
        console.log('Toast closed without confirming');
      },
    });
  };

  const confirmDelete = async (id: string) => {
    try {
      console.log('Deleting comment...', id);
      const { message } = await apiCalls.DeleteComment({ id: id });
      console.log(message);
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== id));
      toast.dismiss();
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete comment.');
    }
  };

  const handleLike = async (id: string) => {
    try {
      const { comment } = await apiCalls.LikeComment({ commentId: id });
      const updatedComment = comments.map((oldComment) =>
        oldComment._id === comment._id ? comment : oldComment
      );
      setComments(updatedComment);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReplySubmit = async (commentId: string) => {
    try {
      if(replyText.trim()=="")return null
      console.log('Replying to comment', commentId, ':', replyText);
      
      const value={
        commentId:commentId,
        reply:replyText
      }

      const {comment} =await apiCalls.ReplyComment(value)
      console.log(comment);
      
      const updatedComment = comments.map((oldComment) =>
        oldComment._id === comment._id ? comment : oldComment
      );
      setComments(updatedComment);
      setReplyText('');
      // Implement your API call or any other actions for submitting the reply
    } catch (error) {
      console.log(error);
      toast.error('Failed to submit reply.');
    }
  };


  const renderComments = (comments: Comment[]) => {
    console.log(comments);
    
    return comments.map((comment) => (
      <div key={comment._id} className="chat chat-start">
        <div className="flex">
            <UserAvatar
              profilePic={comment?.userId?.profilePic}
              username={comment?.userId?.username}
              isOnline={false}
              width={6}
              hight={6}
            />
            <div className="text-black font-medium text-sm px-1 py-0">{comment?.userId?.username}</div>
        </div>
        <div className="flex flex-col bg-slate-100 rounded-full justify-between px-4">
          <div className="flex flex-row">
            <div className="text-black">{comment?.comment}</div>
            {currentUser === comment?.userId?._id && (
              <div className="dropdown dropdown-hover">
                <EllipsisHorizontalIcon className="ml-2 w-6 h-6 px-1 py-1 text-black cursor-pointer" />
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-inherit opacity-20 rounded-2xl cursor-pointer text-black">
                  <li onClick={() => handleDelete(comment?._id)}>Delete</li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-row justify-start">
            <button className="text-sm px-0 text-blue-950 hover:underline">
              <HeartIcon
                className={`w-4 h-4 ${comment?.likes?.includes(currentUser) ? 'text-red-500' : ''}`}
                onClick={() => handleLike(comment?._id)}
              />
            </button>
            <span className="text-xs py-1">:{comment?.likes?.length}</span>
            <button
              className="text-sm px-1 text-blue-950 hover:underline"
              onClick={() => setReplied(replied === comment?._id ? null : comment?._id)}
            >
              {replied === comment?._id ? 'reply' : 'reply'}
            </button>
          </div>
        </div>

        {comment.replies && comment.replies.length > 0 &&<div className='ml-5 mt-2 py-2  border-l-2 border-b-2 border-black'>{ renderComments(comment.replies)}</div>}
        {replied === comment._id && (
          <div className="flex mt-2">
            <div className=" rounded-lg" />
            <input
              
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder={`Replying to ${comment.userId.username}`}
              className=" bg-gray-100 rounded py-1 px-3 "
            />
            <PaperAirplaneIcon 
              className="w-8 h-8 text-black"
              onClick={() => handleReplySubmit(comment._id)}
            />
          </div>
        )}
      </div>
    ));
  };

  if (comments.length === 0) {
    return null;
  }

  const reversedComments = [...comments].reverse();

  return (
    <div className="flex flex-col justify-start px-6">
      {/* Render the comments using recursion */}
      {reversedComments.slice(0, showAllComments ? comments.length : 2).map((comment) => (
        <React.Fragment key={comment._id}>{renderComments([comment])}</React.Fragment>
      ))}

      {comments.length > 2 && (
        <button
          className="px-5 py-2 text-black underline cursor-pointer"
          onClick={() => setShowAllComments(!showAllComments)}
        >
          {showAllComments ? 'Show Less' : 'Show All'}
        </button>
      )}
    </div>
  );
};

export default ShowComment;
