import instance from "./axiosInstance";



export default {

  //user api

  Register: async (payload: object) => {
    const response = await instance.post("user/register", payload);
    return response.data;
  },
  GoogleRegister:async (payload: object) => {
    const response = await instance.post("auth/google/register", payload);
    return response.data;
  },
 
  Login: async (payload: object) => {
    const response = await instance.post("user/login", payload);
    return response.data;
  },

  GoogleLogin:async (payload: object|undefined) => {
    const response = await instance.post("auth/google/login", payload);
    return response.data;
  },

  CreatePost:async (payload:object|undefined)=>{
    const response =await instance.post("post",payload)
    return response.data;
  },

  GetFeeds: async () => {
    const response = await instance.get("post/timeline");
    return response.data;
  },
  
  LikePost: async (id:string) => {
  const response = await instance.get(`post/like/${id}`);
  return response.data;
},

GetUserPosts: async (id:string|undefined) => {
  const response = await instance.get(`post/${id}`);
  return response.data;
},


//admin api

AdminLogin: async (payload: object) => {
  const response = await instance.post("admin/login", payload);
  return response.data;
},

};
