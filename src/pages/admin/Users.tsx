
import UserTable from "../../components/Admin/UserTable";


export interface UserData {
    name: string;
    email: string;
    role: string;
    time: string;
  }
  

const usersData: UserData[] = [
  {
    name: "John Deo",
    email: "johndeo@gmail.com",
    role: "Admin",
    time: "28/12/2021",
  },
];
 const Users = () => {
  return (
    <div>
         <div className="p-4">
          <UserTable users={usersData} />
        </div>
    </div>
  )
}

export default Users