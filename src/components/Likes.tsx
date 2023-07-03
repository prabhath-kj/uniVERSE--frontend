import { HeartIcon } from '@heroicons/react/24/solid';
import ApiCalls from '../services/ApiCalls';
import { useDispatch } from 'react-redux';
import { setPost } from '../state';

interface RooId{
    id:string
    userId:string
    likes: Map<string, boolean>;
  }

export const Likes = ({id,userId,likes}:RooId) => {

  const dispatch=useDispatch()
  const isLiked=Boolean(likes[userId]);
  

  const handleLikeToggle = async() => {
        const {post} = await ApiCalls.LikePost(id)
        dispatch(setPost({
          post
        }))
  };

  return (
    <div onClick={handleLikeToggle}>
    <HeartIcon className={`w-6 h-6 transition-colors duration-300 ${isLiked ? 'text-red-500' : 'text-black'} hover:text-red-500 cursor-pointer`} />
    </div>
  );
};
