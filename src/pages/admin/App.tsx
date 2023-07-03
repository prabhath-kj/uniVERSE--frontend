import { Outlet } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar";

const App= () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <div>
        <div className="p-4">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default App;
