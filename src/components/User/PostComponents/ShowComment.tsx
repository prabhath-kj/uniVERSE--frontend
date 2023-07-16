import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiCalls from '../../../services/user/apiCalls';
import UserAvatar from '../ProfileComponent/UserAvatar';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';


interface Comment {
  _id: string;
  comment: string;
  userId: {
    _id: string;
    username: string;
    profilePic: string;
  };
}

interface Props {
  postId: string;
  newComment: string;
  currentUser: string | undefined;
  cb:(value:any)=>void
}

const ShowComment = ({ postId, newComment, currentUser,cb }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  cb(comments.length)
  const [showAllComments, setShowAllComments] = useState(false);

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
      }
    });
  };

  const confirmDelete = async (id: string) => {
    try {
      console.log('Deleting comment...', id);
      const {message}=await apiCalls.DeleteComment({id:id});
      console.log(message);
      setComments(prevComments => prevComments.filter(comment => comment._id !== id));
      toast.dismiss();
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete comment.');
    }
  };

  if (comments.length === 0) {
    return null;
  }

  const reverSedComment=[...comments].reverse()
  return (
    <div className="flex flex-col justify-start px-6">
      {reverSedComment.slice(0, showAllComments ? comments.length : 2).map((comment) => (
        <div key={comment._id} className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-6 rounded-full cursor-pointer">
              <UserAvatar
                profilePic={comment.userId.profilePic}
                username={comment.userId.username}
                isOnline={false}
                width={6}
                hight={6}
              />
            </div>
            <p className="text-black font-medium text-sm px-1 py-0">{comment.userId.username}</p>
          </div>
          <div className='flex flex-row bg-slate-100 rounded-full justify-between px-4'>
            <div className="text-black py-3">
              {comment.comment}
            </div>
            {currentUser === comment.userId._id && (
              <div className="dropdown dropdown-hover">
                <EllipsisHorizontalIcon className="ml-2 w-6 h-6 px-1 py-1 text-black cursor-pointer" />
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-inherit opacity-20 rounded-2xl cursor-pointer text-black">
                  <li onClick={() => handleDelete(comment._id)}>Delete</li>
                </ul>
              </div>
            )}
          </div>
        </div>
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
