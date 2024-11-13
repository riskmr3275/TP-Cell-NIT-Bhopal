import React from 'react';
import { useSelector } from "react-redux";

const AcademicDashboard = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Welcome  {user?.name}</h2>

        {/* Current Academics Section */}
        <div className="bg-blue-400 text-white  p-3 rounded-t-lg">
          <h3 className="font-semibold">Current Academics</h3>
        </div>

        {/* Details */}
        <div className="border border-gray-300 p-4 rounded-b-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <strong>Full name:</strong> {user?.name}
            </div>
            <div>
              <strong>Roll Name:</strong> MCA/232040{user?.user_id}
            </div>
            <div>
              <strong>Degree:</strong> MCA
            </div>
            <div>
              <strong>Branch:</strong> Computer Application
            </div>
            <div>
              <strong>Email:</strong> {user?.email}
            </div>
            <div>
              <strong>Account Status:</strong> <span className="text-green-500">Active</span>
            </div>
            <div className='bg-blue-100 p-2 rounded-md'>
              <strong>Login ID/Reg. No.:</strong> NITB-MCA232040{user?.user_id}
            </div>
            <div className='bg-blue-100 p-2 rounded-md'>
              <strong>Account Created:</strong> 25-05-2024
            </div>
          </div>

          {/* SGPA Table */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <div className="w-1/12">
                <strong>SGPA 1</strong> <br /> 7.5
              </div>
              <div className="w-1/12">
                <strong>SGPA 2</strong> <br /> 7.38
              </div>
              <div className="w-1/12">
                <strong>SGPA 3</strong> <br />
                <input
                  type="text"
                  placeholder="Enter3"
                  className="border border-gray-300 rounded p-1 w-full"
                />
              </div>
              <div className="w-1/12">
                <strong>SGPA 4</strong> <br />
                <input
                  type="text"
                  placeholder="Enter4"
                  className="border border-gray-300 rounded p-1 w-full"
                />
              </div>
              <div className="w-1/12">
                <strong>SGPA 5</strong> <br />
                <input
                  type="text"
                  placeholder="Enter5"
                  className="border border-gray-300 rounded p-1 w-full"
                />
              </div>
              <div className="w-1/12">
                <strong>SGPA 6</strong> <br />
                <input
                  type="text"
                  placeholder="Enter6"
                  className="border border-gray-300 rounded p-1 w-full"
                />
              </div>
              <div className="w-1/12">
                <strong>SGPA 7</strong> <br />
                <input
                  type="text"
                  placeholder="Enter7"
                  className="border border-gray-300 rounded p-1 w-full"
                />
              </div>
            </div>

            {/* CGPA, Backlog, Everback */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <strong>CGPA:</strong> 7.43
              </div>
              <div>
                <strong>Current Backlog(No.):</strong> 0
              </div>
              <div>
                <strong>Ever Back (Y/N):</strong> No
              </div>
            </div>

            {/* Note */}
            <div className="mt-4 text-red-600 text-sm">
              <strong>Note:</strong> The current academic data displayed here is as obtained from the ERP office. In case of any discrepancy/query please contact the Institute ERP Office.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicDashboard;
