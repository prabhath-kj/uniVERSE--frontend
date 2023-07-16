
const FollowSuggestions = () => {
  return (
    <div className="max-w-sm rounded-lg bg-gray-50  shadow-lg px-2 py-2 w-60 mr-3 ">
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Followers</h2>
        </div>
      </div>
      
      <hr className="border-gray-800" />
      
      <div className="flex flex-shrink-0">
        <div className="flex-1">
          <div className="flex items-center w-48">
            <div>
              <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
            </div>
            <div className="ml-3 mt-3">
              <p className="text-base leading-6 font-medium text-white">
                Sonali Hirave
              </p>
              <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @ShonaDesign
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a href="" className="float-right">
            <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
              Follow
            </button>
          </a>
        </div>
      </div>
       <div className="flex">
        <div className="flex-1 p-4">
          <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
        </div>
      </div>
    </div>
  );
};

export default FollowSuggestions;
