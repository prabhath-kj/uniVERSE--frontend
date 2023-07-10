import  { useEffect,useState } from "react";
import PostComponent from "../../components/MyPost";
import Posted from "../../components/Posted";
import ApiCalls from "../../services/user/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/user";
import { RootState } from "../../state/rooState";
import Loading from "../../components/Loading";

const Post = () => {



  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.user.posts);
  const [loading, setLoading] = useState(true);



  
  useEffect(() => {
    setTimeout(() => {
      getFeeds();
    }, 2000); 
    window.scrollTo(0, 0);
  }, []);


  const getFeeds = async () => {
    try {
      const { post } = await ApiCalls.GetFeeds();
      dispatch(setPosts({ posts: post }));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };
 
  const reversedPosts = [...posts].reverse();

  return (
    <div className=" border-slate-50">
       <PostComponent />
      {loading ? (
        <Loading /> 
      ) : (
        reversedPosts.map((post) => (
          <Posted key={post._id} post={post} />
        ))
      )}
    </div>
  );
};

export default Post;
