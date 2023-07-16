import instance from "./axiosInstance";



export default {


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

SearchUser:async(payload:object)=>{
  const response =await instance.post("user/searchUser",payload)
  return response.data
},

DeletePost:async(payaload:object)=>{
  const response=await instance.post("post/delete",payaload)
  return response.data
},

SavePost:async(payaload:object)=>{
  const response=await instance.post("post/save",payaload)
  return response.data
},

GetSavedPost:async()=>{
  const response=await instance.get("post/saved/all")
  return response.data
},

EditUser:async(payload:object)=>{
  const {data} =await instance.post("user/editProfile",payload)
  return data
},

ReportPost:async(payload:object)=>{
  const {data}=await instance.post("post/report",payload)
  return data
},

FollowUser:async(payload:object)=>{
  const {data}= await instance.post("user/follow",payload)
  return data
},

UnFollowUser:async(payload:object)=>{
  const {data}= await instance.post("user/unFollow",payload)
  return data
},

GetUser:async(payload:string|undefined)=>{
  const {data}=await instance.get(`user/${payload}`)
  return data
},

GetNotifications:async()=>{
  const {data}=await instance.get('/notification')
  return data
},

PostComment:async(payload:object)=>{
  const {data}= await instance.post("/comments",payload)
  return data
},

GetComment:async(payload:string)=>{
  const {data}= await instance.get(`/comments/${payload}`)
  return data
},

DeleteComment:async(payload:object)=>{
  const {data}= await instance.post(`comments/delete`,payload)
  return data
}

};
