import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import apiCalls from "../../services/admin/apiCalls";
import { Report } from "../../state/admin";

interface Props {
  reports: Report[];
}

const ReportTable: React.FC<Props> = ({ reports }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<Report[]>(reports);
//   const dispatch = useDispatch();

  const handleSearch = (value: string) => {
    setSearch(value);
    const searchData = reports.filter(
      (report) =>
        report?.reason?.includes(value.toLowerCase()) ||
        report?.postId?.description?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(searchData);
  };

  const handleDelete = async (reportId: string) => {
    toast(`Are you sure you want to delete?`, {
      position: "top-center",
      hideProgressBar: true,
      closeOnClick: true,
      theme: "light",
    });

    try {
      const { message, success } = await apiCalls.DeletePost({ id: reportId });
      console.log(message);

      if (success) {
        const updatedReports = reports.filter((report) => report._id !== reportId);
        setFilteredData(updatedReports);

        // If you want to dispatch the updated post data to the store, uncomment the following lines
        // dispatch(setPost({
        //     post: updatedPost
        // }));

        toast(message, {
          position: "top-center",
          hideProgressBar: true,
          closeOnClick: true,
          theme: "light",
        });
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
            <th>Image</th>
            <th>Reason</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((report: Report) => (
            <tr key={report?._id}>
              <td>
                {report?.postId?.picturePath.length === 0 ? (
                  <p>No Image</p>
                ) : (
                  <img
                    src={report?.postId?.picturePath[0]}
                    alt="Post Image"
                    className="w-12 h-12"
                  />
                )}
              </td>
              <td>{report?.reason}</td>
              <td>{report?.postId?.description?.slice(0, 50)}</td>
              <td>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => handleDelete(report?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
