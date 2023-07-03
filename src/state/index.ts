import { createSlice } from "@reduxjs/toolkit";

export interface User {
    _id?:string
    googleId?: string;
    username: string;
    email: string;
    password?: string;
    profilePic?: string;
    profileView?: number;
    impression?: number;
    online?: boolean;
    blocked?: boolean;
    chatUsers?: [];
    createdAt?: Date;
    followers?: [];
    following?: [];
    notifications?: [];
    accountPrivate?: boolean;
    isEmailVerified?: boolean;
}

export interface Post {
    _id:string
  userId: string;
  username: string;
  description?: string;
  picturePath?: string;
  userPicturePath?: string;
  likes: Map<string, boolean>;
  comments: string[];
 
}


export interface AuthState {
  user: User | null;
  token: string | null;
  admin:User|null;
  adminToken:string|null
  posts: Post[];
  isToggle:Boolean
}

const initialState: AuthState = {
  user: null,
  token: null,
  admin:null,
  adminToken:null,
  posts: [],
  isToggle:true
};

const authSlice = createSlice({
   name: "auth",
   initialState,

  reducers: {
    setLogin: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    },

    setAdLogin:(state,action)=>{
    state.admin=action.payload.admin,
    state.adminToken=action.payload.adminToken
     },

    setPosts: (state, action) => {
    state.posts = action.payload.posts;
    },

    setPost: (state, action) => {
    const newPosts = state.posts.map((post) => {
    if (post._id === action.payload.post._id) {
    return action.payload.post;
    }
    return post;
    });
    state.posts = newPosts;
    },

    setSideBar:(state)=>{
    state.isToggle=!state.isToggle
    }

  },
});


export const { setLogin, setPosts, setPost,setSideBar,setAdLogin} = authSlice.actions;
export default authSlice.reducer;
