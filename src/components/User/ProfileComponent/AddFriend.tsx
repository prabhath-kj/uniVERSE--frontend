import { UserPlusIcon, UserMinusIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/rooState";
import apiCalls from "../../../services/user/apiCalls";
import { setFollowing } from "../../../state/user";
import {toast}  from "react-toastify"

const AddFriend = ({ userId }: any) => {
  const dispatch = useDispatch();
  const currentUser =useSelector((state:RootState)=>state.user.user?._id)
  const following = useSelector((state: RootState) => state.user.user?.following?.includes(userId));

  const handleFollow = async () => {
    try {
      const { following, message } = await apiCalls.FollowUser({ userId: userId });
      dispatch(setFollowing(following));
      toast(message,{position:"top-center"})
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async () => {
    try {
      const { following, message } = await apiCalls.UnFollowUser({ userId: userId });
      dispatch(setFollowing(following));
      toast(message,{position:"top-center"})
    } catch (err) {
      console.log(err);
    }
  };

  if(currentUser===userId){
    return null
  }

  return (
    <>
      {following ? (
        <UserMinusIcon className="w-6 h-6 cursor-pointer text-black dark:md:hover:text-gray-600 " onClick={handleUnfollow} />
      ) : (
        <UserPlusIcon className="w-6 h-6 cursor-pointer  text-black dark:md:hover:text-gray-600" onClick={handleFollow} />
      )}
    </>
  );
};

export default AddFriend;
