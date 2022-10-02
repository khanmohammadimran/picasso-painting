import React from "react";
import { toast, ToastContainer } from "react-toastify";

const userRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://mighty-everglades-23547.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Yay Successfully made an admin`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn-xs btn btn-ghost border-0 font-sans text-white w-full max-w-xs bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>Blue</td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default userRow;
