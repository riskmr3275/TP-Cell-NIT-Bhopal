import React, { useEffect } from "react";
import { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCompanyList } from "../../services/operations/Company";
import { useSelector } from "react-redux";
import { addCompany } from "../../services/operations/Company";
function CompanyManagement() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [company, setCompany] = useState(""); // Initial state for company name
  const { companyData } = useSelector((state) => state.company);
  const handleCompanyChange = (e) => {
    setCompany(e.target.value); // Update state on input change
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);

  const [isOpen2, setIsOpen2] = useState(false);
  const openModal2 = () => setIsOpen2(true);

 // Navigate to View Openings page
 const ViewOpeningsButton = (id) => {
  navigate(`/dashboard/companymanagement/viewOpening/${id}`);
};

  const closeModal2 = () => setIsOpen2(false);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    dispatch(addCompany(formData, navigate, token));
    // Process formData here (e.g., send to backend)

    closeModal();
  };
  // Dummy functions
  const editJob = (id) => {
    console.log(`Edit job with id: ${id}`);
  };
  const deleteJob = (id) => {
    console.log(`Delete job with id: ${id}`);
  };
  const addJob = () => {
    console.log("Add a new job");
  };

  useEffect(() => {
    dispatch(getCompanyList(token, navigate));
  }, [navigate]);

  console.log("Company List", companyData);
  return (
    <div className="p-6 bg-white w-full">
      {/* Top Section: Search and Add Company */}
      <div className="flex items-center justify-between mb-8">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search companies..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Add Company Button */}
        <div>
          <div>
            <Button onClick={openModal}>
              <Plus className="mr-2 h-7 w-4" /> Add New Company
            </Button>

            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 w-full">
                <div className="bg-gray-800 w-[50%] p-6 rounded-lg text-white relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                  >
                    &times;
                  </button>
                  <h2 className="text-2xl font-semibold text-center mb-2">
                    Company Details
                  </h2>
                  <p className="text-gray-400 text-center mb-6">
                    Please fill in the company information below.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                  >
                    <div>
                      <label className="block mb-1 font-medium">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Enter company name"
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Industry</label>
                      <input
                        type="text"
                        name="industry"
                        placeholder="Enter industry"
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                        value={formData.industry}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Website</label>
                      <input
                        type="url"
                        name="website"
                        placeholder="https://example.com"
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Address</label>
                      <textarea
                        name="address"
                        placeholder="Enter company address"
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 h-24"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">
                        Company Description
                      </label>
                      <textarea
                        name="description"
                        placeholder="Enter company description"
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 h-24"
                        value={formData.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-max px-8 p-3 rounded bg-blue-800 hover:bg-blue-700 text-white font-semibold"
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Company Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {companyData &&
          companyData.map((company, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow flex flex-col"
            >
              <h2 className="text-lg font-semibold">{company.company_name}</h2>
              <p className="text-sm text-gray-500">{company.industry}</p>
              <div className="text-sm mt-2">
                <span className="font-semibold">Website:</span>{" "}
                {company.website}
              </div>
              <div className="text-sm">
                <span className="font-semibold">Date:</span>{" "}
                {company.created_at}
              </div>
              <div className="text-sm mt-2">
                <span className="font-semibold">Open Positions:</span> 3
              </div>
              <button
                onClick={() => ViewOpeningsButton(company.company_id)}
                className="mt-4 px-4 py-2 w-full bg-gray-400 rounded hover:bg-gray-300 transition-all duration-300"
              >
                View Openings
              </button>

              {/* edit Company Button */}
              <div>
                <div>
                  <button
                    onClick={openModal1}
                    className="mt-4 px-4 py-2  w-full bg-gray-400 rounded hover:bg-gray-300 transition-all duration-300"
                  >
                    Edit
                  </button>

                  {isOpen1 && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50 w-full">
                      <div className="bg-gray-800  w-[50%] p-6 rounded-lg text-white relative">
                        <button
                          onClick={closeModal1}
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                        >
                          &times;
                        </button>
                        <h2 className="text-2xl font-semibold text-center mb-2">
                          Company Details
                        </h2>
                        <p className="text-gray-400 text-center mb-6">
                          Please fill in the company information below.
                        </p>
                        <form className="flex flex-col space-y-4">
                          <div>
                            <label className="block mb-1 font-medium">
                              Company Name
                            </label>
                            <input
                              type="text"
                              placeholder={company.company_name}
                              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                              onChange={handleCompanyChange} // Allow editing with onChange
                            />
                          </div>

                          <div>
                            <label className="block mb-1 font-medium">
                              Industry
                            </label>
                            <input
                              type="text"
                              placeholder={company.industry}
                              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>

                          <div>
                            <label className="block mb-1 font-medium">
                              Website
                            </label>
                            <input
                              type="url"
                              placeholder={company.website}
                              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>

                          <div>
                            <label className="block mb-1 font-medium">
                              Address
                            </label>
                            <textarea
                              placeholder={company.address}
                              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 h-24"
                            ></textarea>
                          </div>
                          <div>
                            <label className="block mb-1 font-medium">
                              Company Description
                            </label>
                            <textarea
                              placeholder={company.company_description}
                              className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 h-24"
                            ></textarea>
                          </div>

                          <div className="flex justify-between items-start gap-5">
                            {" "}
                            <button
                              type="submit"
                              className="mt-4 w-max px-8 p-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                            >
                              Update
                            </button>
                            <button
                              type="submit"
                              className="mt-4 w-max px-8 p-3 rounded bg-red-900 hover:bg-red-700 text-white font-semibold"
                            >
                              Delete Company
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="bg-blue-950 text-white p-4 w-max rounded-md px-7  ">
        <button>View All</button>
      </div>
      {/* Recent Activities */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500">
              <th>Company</th>
              <th>Action</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>TechCorp</td>
              <td>New job posting</td>
              <td>2024-03-01</td>
              <td className="text-green-600">Active</td>
            </tr>
            <tr>
              <td>FinanceHub</td>
              <td>Interview scheduled</td>
              <td>2024-02-28</td>
              <td className="text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Application Statistics */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Application Statistics</h3>
          {[
            { label: "Applications Submitted", percentage: 75 },
            { label: "Shortlisted Candidates", percentage: 50 },
            { label: "Interviews Completed", percentage: 25 },
          ].map((stat, idx) => (
            <div key={idx} className="mb-4">
              <span className="block text-sm font-medium mb-1">
                {stat.label}
              </span>
              <div className="w-full bg-gray-200 h-4 rounded">
                <div
                  className="bg-blue-950 h-4 rounded"
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <button className="w-full py-2 bg-gray-100 rounded mb-2 hover:bg-gray-300 transition-all duration-500">
            Send Notifications
          </button>
          <button className="w-full py-2 bg-gray-100 rounded mb-2 hover:bg-gray-300 transition-all duration-500">
            Schedule Campus Visit
          </button>
          <button className="w-full py-2 bg-gray-100 rounded mb-2 hover:bg-gray-300 transition-all duration-500">
            Generate Reports
          </button>
          <button className="w-full py-2 bg-gray-100 rounded hover:bg-gray-300 transition-all duration-500">
            Manage Students
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyManagement;
