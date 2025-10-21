import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/Loader";
import useUserStore from "@/store/useUserStore";

const AdminPage = () => {
  const { getAllUsers, allUsers, changeUserRole, loading ,deleteUser} = useUserStore();
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 text-black pt-[73px] lg:pt-[83px]">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        {loading ? (
           <Loader/>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">
              Admin - User Management
            </h1>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 border border-gray-300">#</th>
                    <th className="p-3 border border-gray-300">Name</th>
                    <th className="p-3 border border-gray-300">Email</th>
                    <th className="p-3 border border-gray-300">Role</th>
                    <th className="p-3 border border-gray-300">Edit</th>
                    <th className="p-3 border border-gray-300">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers?.map((user, index) => (
                    <tr
                      key={user.id}
                      className="text-center bg-[#00274D] text-white hover:bg-[#004080] transition-all duration-300"
                    >
                      <td className="p-3 border border-gray-300">
                        {index + 1}
                      </td>
                      <td className="p-3 border border-gray-300">
                        {user.fullName}
                      </td>
                      <td className="p-3 border border-gray-300">
                        {user.email}
                      </td>
                      <td className="p-3 border border-gray-300">
                      {user.role}
                      </td>
                      <td className="p-3 border border-gray-300 relative text-center">
                        <Select
                          value={user.role}
                          onValueChange={async (value) => {
                            const result = await changeUserRole(
                              user?.email,
                              value
                            );
                            if (result.success) {
                              await getAllUsers();
                            }
                          }}
                        >
                          <SelectTrigger className="w-[100px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ADMIN">ADMIN</SelectItem>
                            <SelectItem value="SUPERADMIN">
                              SUPER ADMIN
                            </SelectItem>
                            <SelectItem value="USER">USER</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="p-3 border border-gray-300">
                        <button
                          onClick={async () => {
                            const result = await deleteUser(user?.email);
                            if(result.success){
                              await getAllUsers();
                            }
                          }}
                          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      <style>
        {`
          @keyframes dropdown {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-dropdown {
            animation: dropdown 0.2s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default AdminPage;
