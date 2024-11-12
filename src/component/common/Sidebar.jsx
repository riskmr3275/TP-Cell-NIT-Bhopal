import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/operations/authAPI1";
import {
  FaRegChartBar,
  FaTable,
  FaUser,
  FaExclamationTriangle,
  FaTags,
  FaHandsHelping,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoPerson, IoDocumentAttach } from "react-icons/io5";
import {
  IoDocumentTextSharp,
  IoPersonOutline,
  IoLogOutSharp,
} from "react-icons/io5";
import { MdDashboard, MdLocalActivity, MdAddAlert } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { AiTwotoneLike } from "react-icons/ai";
import { IoShareSocial, IoPrint, IoCloudUploadSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage dropdowns
  const [upDown, setUpDown] = useState(false);

  const { user } = useSelector((state) => state.profile); // Access user from Redux

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle the dropdown for the clicked item
  };

  return (
    <div className="w-1/5 bg-gray-100 text-white flex flex-col min-h-screen pt-5   border-r-2 border-blue-950
    ">
      <nav className="flex-1 px-6 py-4 fixed bg-gray-100   ">
        <ul >
          {/* Render for Student */}
          {user.accountType === "Student" && (
            <>
              {/* Student Menu Items */}
              <Link to="dashboard/recentjob">
                <li className="mb-3">
                  <div
                    className="flex items-center cursor-pointer text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1 transition-all"
                  >
                    <MdDashboard className="mr-3 text-xl" />
                    <span className="hidden md:inline">New Openings</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/calender">
                <li className="mb-3">
                  <div
                    className="flex items-center cursor-pointer text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1"
                    onClick={() => {
                      toggleDropdown(1);
                      setUpDown(!upDown);
                    }}
                  >
                    <SlCalender className="mr-3 text-xl" />
                    <span className="hidden md:inline">Calendar</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/appliedjob">
                <li className="mb-3">
                  <div
                    className="flex items-center cursor-pointer  text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1"
                    onClick={() => toggleDropdown(2)}
                  >
                    <FaTable className="mr-3 text-xl" />
                    <span className="hidden md:inline">Applied Jobs</span>
                  </div>
                </li>
              </Link>

              <li className="mb-3">
                <div
                  className="flex items-center cursor-pointer  text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1"
                  onClick={() => {
                    toggleDropdown(3);
                    setUpDown(!upDown);
                  }}
                >
                  <IoDocumentTextSharp className="mr-3 text-xl" />
                  <span className="hidden md:inline">Build Your Resume</span>
                  {upDown ? (
                    <MdKeyboardArrowDown className="text-2xl transition-all" />
                  ) : (
                    <MdOutlineKeyboardArrowRight className="text-2xl transition-all" />
                  )}
                </div>

                {/* Nested Dropdown for User Pages */}
                {openDropdown === 3 && (
                  <ul className="ml-5 mt-2 gap-2">
                    <li>
                      <a
                        href="/dashboard/personal"
                        className="text-gray-400 hover:text-white"
                      >
                        <div className="flex items-center">
                          <IoPerson className="mr-3 text-md" />
                          <span className="hidden md:inline">Personal Details</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <div className="flex items-center">
                          <HiAcademicCap className="mr-3 text-md" />
                          <span className="hidden md:inline">Academics Details</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/dashboard/skill"
                        className="text-gray-400 hover:text-white"
                      >
                        <div className="flex items-center">
                          <FaTags className="mr-3 text-md" />
                          <span className="hidden md:inline">Skills</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <div className="flex items-center">
                          <MdLocalActivity className="mr-3 text-md" />
                          <span className="hidden md:inline">Curricular Activities</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <div className="flex items-center">
                          <AiTwotoneLike className="mr-3 text-md" />
                          <span className="hidden md:inline">Work Experience</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <div className="flex items-center">
                          <IoShareSocial className="mr-3 text-md" />
                          <span className="hidden md:inline">Social Links</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <div className="flex items-center">
                          <MdAddAlert className="mr-3 text-md" />
                          <span className="hidden md:inline">Career Objective</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/dashboard/AttachmentForm"
                        className="text-gray-400 hover:text-white"
                      >
                        <div className="flex items-center">
                          <IoCloudUploadSharp className="mr-3 text-md" />
                          <span className="hidden md:inline">Upload Document </span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        <div className="flex items-center">
                          <IoPrint className="mr-3 text-md" />
                          <span className="hidden md:inline">Submit/Print Resume</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <Link to="/dashboard/curracademics">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer  text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <HiAcademicCap className="mr-3 text-xl" />
                    <span className="hidden md:inline">Current Academics</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/uploadresume">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer  text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <FaExclamationTriangle className="mr-3 text-xl" />
                    <span className="hidden md:inline">Upload Additional Resume</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/uploadLetter">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer  text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <IoCloudUploadSharp className="mr-3 text-xl" />
                    <span className="hidden md:inline">Upload Offer Letter</span>
                  </div>
                </li>
              </Link>
            </>
          )}

          {/* Render for Coordinator (TPR) */}
          {user.accountType === "Coordinator" && (
            <>
              <Link to="/dashboard/overview">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer text-gray-400 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <MdDashboard className="mr-3 text-xl" />
                    <span className="hidden md:inline">Overview</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/companymanagement">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer text-gray-400 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <FaRegChartBar className="mr-3 text-xl" />
                    <span className="hidden md:inline">Company Management</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/studentmanagement">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer text-gray-400 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <FaUser className="mr-3 text-xl" />
                    <span className="hidden md:inline">Student Management</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/placementdrives">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer text-gray-400 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <MdLocalActivity className="mr-3 text-xl" />
                    <span className="hidden md:inline">Placement Drives</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/trainingdevelopment">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer text-gray-400 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <HiAcademicCap className="mr-3 text-xl" />
                    <span className="hidden md:inline">Training & Development</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/notifications">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer text-gray-400 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <MdAddAlert className="mr-3 text-xl" />
                    <span className="hidden md:inline">Notifications/Alerts</span>
                  </div>
                </li>
              </Link>

              <Link to="/dashboard/reportsanalytics">
                <li className="mb-3">
                  <div className="flex items-center cursor-pointer text-gray-400 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                    <FaRegChartBar className="mr-3 text-xl " />
                    <span className="hidden md:inline">Reports & Analytics</span>
                  </div>
                </li>
              </Link>
            </>
          )}

          {/* Common to all users */}
          <Link to="dashboard/profile">
            <li className="mb-3">
              <div className="flex items-center cursor-pointer  text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                <IoPersonOutline className="mr-3 text-xl" />
                <span className="hidden md:inline">Manage Profile</span>
              </div>
            </li>
          </Link>

          <Link to="/dashboard/help">
            <li className="mb-3">
              <div className="flex items-center cursor-pointer  text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1">
                <FaHandsHelping className="mr-3 text-xl" />
                <span className="hidden md:inline">Help Desk</span>
              </div>
            </li>
          </Link>

          <li className="mb-3">
            <button  onClick={() => {
              dispatch(logout(navigate));
            }} className="flex items-center cursor-pointer w-full  text-gray-600 hover:text-blue-950 hover:border-b-2 border-blue-950 p-1 transition-all ">
              <IoLogOutSharp className="mr-3 text-xl" />
              <span className="hidden md:inline">Sign Out</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
