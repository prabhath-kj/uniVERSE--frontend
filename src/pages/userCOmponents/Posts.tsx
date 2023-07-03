import  { useEffect } from "react";
import PostComponent from "../../components/MyPost";
import Posted from "../../components/Posted";
import ApiCalls from "../../services/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, AuthState } from "../../state";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: AuthState) => state.posts);

  const getFeeds = async () => {
    const { post } = await ApiCalls.GetFeeds();
    dispatch(setPosts({
      posts: post
    }));
  };

  useEffect(() => {
    getFeeds();
    window.scrollTo(0, 0);
  }, []);

 
  const reversedPosts = [...posts].reverse();

  return (
    <div className=" border-slate-50 ">
      <PostComponent />
      {reversedPosts.map((post) => (
        <Posted key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Post;
