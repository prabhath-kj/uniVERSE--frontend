import {useSelector,useDispatch} from "react-redux"
import { RootState } from "../../state/rooState";
import { useEffect } from "react";
import PostTable from "../../components/Admin/PostTable";
import apiCalls from "../../services/user/apiCalls";
import { setPosts } from "../../state/user";

const Users = () => {
const dispatch =useDispatch()
const posts=useSelector((state:RootState)=>state.user.posts)

  useEffect(()=>{  
    getFeeds()
  
  },[])
  
  const getFeeds = async () => {
    const { post } = await apiCalls.GetFeeds();
    dispatch(setPosts({
      posts: post
    }));
  };

  return (
    <div >
    <PostTable posts={posts} />
    </div>

  )
}

export default Users