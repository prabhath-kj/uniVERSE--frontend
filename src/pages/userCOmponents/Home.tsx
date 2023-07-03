
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import Test from './Posts';
import Add from '../../components/Add';



const Home = () => {
  return (
    

    <div className="h-screen w-full flex flex-col justify-between">
          <div className="w-full h-full flex mt-0">
            <div className="min-w-fit h-full  py-5 sm:py-1">
              <NavBar/>
          <div className="md:col-span-3 lg:col-span-3 mt-12 xsm:hidden">
           <SideBar />
          </div>
            </div>
            <div className="w-full sm:w-4/5 overflow-y-auto py-5 px-2  mt-12 scrollbar-hide">
              <Test />
            </div>
            <div className="col-span-3 mt-16">
              <Add/>
          </div>
          </div>
        </div>

  );
};

export default Home;
