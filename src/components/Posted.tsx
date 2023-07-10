import { useSelector } from "react-redux";
import { Post } from "../state/user";
import { RootState } from "../state/rooState";
import { Likes } from "./Likes";
import PostMenu from "./PostMenu"

interface PostProps {
    post: Post;
  }
  
 const Posted =({post}:PostProps) => {
  const formattedDateTime =post?.createdAt
  ? new Date(post.createdAt).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
  : 'No date available';
 const user =useSelector((state:RootState)=>state.user.user)

  return (
    <div className="bg-white border-2 h-auto shadow-lg rounded-lg pb-4 mt-2 ">
    <div className="flex flex-row px-2 py-3 justify-between">
  <div className="flex">
  <div className="relative flex flex-shrink-0 items-end">
            <img className="h-16 w-16 rounded-full" src={post?.userPicturePath} alt="User Avatar" />
            <span className={`absolute h-4 w-4 ${user?._id==post?.userId?" bg-green-400":"bg-gray-500"} rounded-full bottom-0 right-0 border-2 border-slate-900`}></span>
    </div>
    <div className="flex flex-col mb-2 ml-4 mt-1">
      <div className="flex text-gray-600 text-sm font-medium">
        <span className="flex-1 flex-shrink-0">{post?.username}</span>
      </div>
      <div className="flex flex-row-reverse justify-end w-full mt-1">
        <div className="text-gray-400 font-thin text-xs">
          {formattedDateTime}
        </div>
      </div>
    </div>
  </div>
    <PostMenu postId={post?._id} savedBy={post?.savedBy} postedUser={post?.userId} currentUser={user?._id??""} />
  </div>
    <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">{post?.description}</div>
    <div className="text-gray-400 font-medium text-sm cursor-pointer">
    {post?.picturePath && post?.picturePath.length ==1 && post?.picturePath[0].trim() !== "" ? (
   <img className="rounded w-full" src={post?.picturePath[0]} alt="Post Image" />
  ) : (
  <div className="grid grid-cols-2 gap-2">
    {post?.picturePath && post?.picturePath.map((path: string, index: number) => (
      <img key={index} className=" grid grid-flow-row-dense rounded w-full " src={path} alt={`Post Image ${index}`} />
    ))}
  </div>
   )}
 </div>
    <div className="flex justify-start mb-4 border-t border-gray-100">
    <div className="flex w-full border-t border-gray-100">
  <div className="mt-3 mx-5 w-full flex justify-start text-xs">
    <div className="flex text-gray-700 rounded-md mb-2 mr-4 items-center"><Likes id={post?._id} userId={user?._id ??""} likes={post?.likes}/>: <div className="ml-1 text-gray-400 text-ms">{Object.keys(post?.likes).length}</div></div>
    <div className="flex text-gray-700 font-normal rounded-md mb-2 items-center">Comments: <div className="ml-1 text-gray-400 text-ms">{post?.comments.length}</div></div>
  </div> 
</div>

<div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
  <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src={user?.profilePic}/>
  <input type="search" name="comment" className=" w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent rounded-lg shadow-md" placeholder="Post a comment..."/>
  <span className="absolute inset-y-0 right-0 flex items-center pr-6">
    <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500 ">
      <svg className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </button>
  </span>
</div>
</div>
</div>
  )
}
 export default Posted