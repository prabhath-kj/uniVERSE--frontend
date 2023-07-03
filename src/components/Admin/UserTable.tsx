import { UserData } from "../../pages/admin/Users";

interface Props {
  users: UserData[];
}

const UserTable = ({ users }:Props) => {
  return (
    <div>
      <div className="bg-white p-4 rounded-md">
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-700">Users</h2>
          <div>
            <div>
              <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                <div>
                  <span>Name</span>
                </div>
                <div>
                  <span>Email</span>
                </div>
                <div>
                  <span>Role</span>
                </div>
                <div>
                  <span>Time</span>
                </div>
                <div>
                  <span>Edit</span>
                </div>
              </div>
              {users.map((user, index) => (
                <div key={index} className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                  <div className="px-2 flex">
                    <span>{user.name}</span>
                  </div>
                  <div>
                    <span>{user.email}</span>
                  </div>
                  <div className="px-2">
                    <span>{user.role}</span>
                  </div>
                  <div className="px-2">
                    <span>{user.time}</span>
                  </div>
                  <div className="px-2">
                    <select>
                      <option>Admin</option>
                      <option>User</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
