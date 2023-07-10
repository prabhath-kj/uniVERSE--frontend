import { UserPlusIcon } from "@heroicons/react/24/solid";
import { User } from "../state/user";

type SearchUser={
    user:User
}

const SearchUser = ({user}:SearchUser) => {
  return (
    <div className="w-full md:w-96 h-auto relative">
      <div className="bg-slate-900 text-slate-100 mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
        <div className="w-full flex items-center justify-between">
          <span className="font-medium text-sm"></span>
          <button className="-mr-1 bg-slate-800 hover:bg-slate-700/70 text-slate-400 hover:text-slate-200 h-5 w-5 rounded-full flex justify-center items-center">
            <UserPlusIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex items-center  rounded-lg py-1 cursor-pointer">
          <div className="relative flex flex-shrink-0 items-end">
            <img className="h-16 w-16 rounded-full" src="https://i.pravatar.cc/300" alt="User Avatar" />
            <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
          </div>
          <div className="ml-3.5 flex-row space-y-2">
            <div className="font-semibold tracking-tight text-xs">{user?.username}</div>
            <div className="text-xs leading-none opacity-50">{user?.email}</div>
            {/* <p className="text-xs leading-4 pt-2 italic opacity-70">"This is the comment..."</p>
            <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">a few seconds ago</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
