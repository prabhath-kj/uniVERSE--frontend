import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Add from './components/Add';
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from './state/rooState';

const App = () => {

const isToggler=useSelector((state:RootState)=>state.user.isToggle)
console.log(isToggler);

  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <div className="w-full h-full flex mt-0">
        <div className={`min-w-fit h-full py-5 sm:py-1 ${isToggler ? 'left-0' : '-left-64'}`}>
          <NavBar />
          <div className=" hidden sm:block md:block mt-20 ">
            <SideBar isOpen={isToggler} />
          </div>
        </div>
        <div className="w-full sm:w-4/5 py-5 px-10  overflow-y-auto mt-12 scrollbar-hide">
          <Outlet />
        </div>
        <div className="col-span-3 mt-20 hidden sm:block ">
          <Add />
        </div>
      </div>
    </div>
  );
};

export default App;
