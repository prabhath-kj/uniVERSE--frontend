import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { User } from "../../state/user";
import apiCalls from "../../services/admin/apiCalls";
import { setUsers } from "../../state/admin";

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<User[]>(users);
  const dispatch = useDispatch();

  const handleSearch = (value: string) => {
    setSearch(value);
    const searchData = users.filter(
      (user) =>
        user.username.includes(value.toLowerCase()) || user.email.includes(value.toLowerCase())
    );
    setFilteredData(searchData);
  };

  const handleUser = async (
    userId: string|undefined,
    username: string,
    value: boolean | undefined,
    action: string
  ) => {
    const payload = {
      id: userId,
      status: !value,
    };

    // toast(`Are you sure you want to ${action} ${username}?`, {
    //   position: "top-center",
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   theme: "light",
    // });

    try {
      const { data, message } = await apiCalls.EditUser(payload);

      if (data) {
        const updatedUsers = users.map((user) =>
          user._id === data._id ? data : user
        );
        setFilteredData(updatedUsers);
        dispatch(setUsers(updatedUsers));
      }

      if (message) {
        setTimeout(()=>{
          toast(message, {
            position: "top-center",
            hideProgressBar: true,
            closeOnClick: true,
            theme: "light",
          });
        },1000)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col py-4 px-2">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered input-success w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user: User) => (
            <tr key={user._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.profilePic}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.username}</div>
                  </div>
                </div>
              </td>
              <td>{user.email}</td>
              <td>
                {user.blocked ? (
                  <div className="badge badge-info">Blocked</div>
                ) : (
                  <div className="badge badge-success">Active</div>
                )}
              </td>
              <td>
                <button
                  className={`btn ${
                    user.blocked ? "btn-warning" : "btn-error"
                  } btn-xs`}
                  onClick={() =>
                    handleUser(
                      user._id,
                      user.username,
                      user.blocked,
                      user.blocked ? "Unblock" : "Block"
                    )
                  }
                >
                  {user.blocked ? "Unblock" : "Block"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
