import {VideoCameraIcon,XCircleIcon} from '@heroicons/react/24/solid'
import  { useState } from 'react';
import ApiCalls from '../services/ApiCalls';
import { useDispatch } from 'react-redux';
import { setPosts } from '../state';
import { toast } from "react-toastify"


 const PostComponent = () => {
  const dispatch=useDispatch()
 const [image,setImage]=useState<string|any>(null)
 const [text,setText]=useState<string>("")
 const [selectedImage,setSelectedImage]=useState<any>()

 const handleSubmit = async(event: React.FormEvent) => {
  event.preventDefault();
  const trimmedText = text.trim();

  if (!image && trimmedText === '') {
    toast('Please share either an image or text', {
      position: 'bottom-center',
      hideProgressBar: true,
      closeOnClick: true,
      theme: 'dark',
    });
    return;
  }
 
  const formData = new FormData();
  formData.append('file',selectedImage??"");
  formData.append("text",trimmedText)
  setText('');
  setImage(null);  
  setSelectedImage(null)
  const {post} =await ApiCalls.CreatePost(formData) 
  dispatch(setPosts({
    posts:post
  })) 
};


  return (
  <div className='mt-4'>
  <form className="bg-white shadow rounded-lg mb-6 p-4 w-full ">
    <textarea
      name="message"
      id='message'
      placeholder="Type something..."
      value={text}
      onChange={({target})=>setText(target.value)}
      className="focus:outline-none w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent placeholder-gray-400"
    ></textarea>
      {image && (
        <div className="w-32 h-32 relative mt-1">
        <XCircleIcon className="absolute top-0 right-0 w-6 h-6 text-gray-500 cursor-pointer" onClick={() => { setImage(null) }} />
        <img src={image} alt="Preview" className="w-24 h-24 object-cover rounded-lg" />
      </div>
       )}
    <footer className="flex justify-between mt-2">
      <div className="flex gap-2">
          <label htmlFor="imageUpload">
          <span className="flex items-center hover:bg-black hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-black cursor-pointer">

          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          </span>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={({ target: { files } }) => {
              if (files && files.length > 0) {
                setSelectedImage(files[0]);
                setImage(URL.createObjectURL(files[0]));
              }
            }}
            
          />         
        <span className="flex items-center hover:bg-blck hover:bg-black hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-black cursor-pointer">
          <VideoCameraIcon
            width="24"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </span>
      </div>
      <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-black text-white shadow-lg" onClick={handleSubmit}>
        Send
        <svg
          className="ml-1"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </footer>
    </form>
    </div>
    
  )
}

export default PostComponent