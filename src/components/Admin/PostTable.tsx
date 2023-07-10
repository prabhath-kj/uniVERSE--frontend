import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Post, setPosts } from "../../state/user";
import apiCalls from "../../services/admin/apiCalls";

interface Props {
  posts: Post[];
}

const PostTable: React.FC<Props> = ({ posts }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<Post[]>(posts);
  console.log(filteredData);
  
  const dispatch = useDispatch();

  const handleSearch = (value: string) => {
    setSearch(value);
    const searchData = posts.filter(
      (post) =>
        post?.description?.includes(value.toLowerCase()) || post.username.includes(value.toLowerCase())
    );
    setFilteredData(searchData);
  };

  const handleDelete = async (postId: string) => {
    // toast(`Are you sure you want to delete?`, {
    //   position: "top-center",
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   theme: "light",
    // });

    try {
     const {message,success}= await apiCalls.DeletePost({id:postId});
     
     if(success){
        const updatedPost= posts.filter((post)=>{
          return  post._id!=postId
        })
        console.log("iam updated",updatedPost);
        
        setFilteredData(updatedPost)

        dispatch(setPosts({
            posts:updatedPost
        }))
       toast(message, {
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: true,
        theme: "light",
       })
    }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col py-4 px-2">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered input-success w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>User Name</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((post: Post) => (
            <tr key={post?._id}>
              <td>
              {post?.picturePath.length==0 ?(
             <p>No Image</p>
              ): (
                <img
                src={post?.picturePath[0]}
                alt="Post Image"
                 className="w-12 h-12"
                 />
                ) }

              </td>
              <td>{post?.username}</td>
              {/* <td>{post?.createdAt}</td> */}
              <td>{post?.description?.slice(0,50)}</td>
              <td>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => handleDelete(post?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
