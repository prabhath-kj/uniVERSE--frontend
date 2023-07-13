import { createSlice } from "@reduxjs/toolkit";

export interface User {
    _id:string
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
  description: string;
  picturePath:string[];
  userPicturePath: string;
  likes: { [userId: string]: boolean};
  comments: string[];
  createdAt:string;
  savedBy:string[];
  isDeleted:boolean;
 
}


export interface AuthState {
  user: User | null;
  token: string | null;
  posts: Post[];
  isToggle:Boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  posts: [],
  isToggle:true,
};

const userSlice = createSlice({
   name: "user",
   initialState,

  reducers: {
    setLogin: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    },

    setPosts: (state, action) => {
    state.posts = action.payload.posts;
    },
    setFollowers: (state, action) => {
      if (state.user) {
        state.user.followers = action.payload;
      }
    },
    setFollowing: (state, action) => {
      if (state.user) {
        state.user.following = action.payload;
      }
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
    },
    
  },
});


export const { setLogin, setPosts, setPost,setSideBar,setFollowers,setFollowing} = userSlice.actions;
export default userSlice.reducer;
