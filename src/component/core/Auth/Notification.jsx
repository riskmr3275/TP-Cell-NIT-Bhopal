import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { AiOutlineCaretDown, AiFillNotification } from "react-icons/ai";

const NavBar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle notification modal
  const toggleNotificationModal = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <nav className="bg-slate-300 text-white p-3 border-b-1 border-blue-900 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex ">
          <li className="font-semibold p-2 hover:rounded-md hover:underline text-gray-900 text-lg transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold p-2 hover:rounded-md hover:underline text-gray-900 text-lg transition-all">
            <Link to="/jobboard">Off-Opportunity</Link>
          </li>
          <li className="font-semibold p-2 hover:rounded-md hover:underline text-gray-900 text-lg transition-all">
            <Link to="/events">Events</Link>
          </li>
          <li className="font-semibold p-2 hover:rounded-md hover:underline text-gray-900 text-lg transition-all">
            <Link to="/about-us">About</Link>
          </li>
        </ul>

        {/* Search Icon and Auth Buttons */}
        <div className="hidden items-center gap-x-4 md:flex">
          {token === null && (
            <>
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-white px-[12px] py-[8px] text-blue-950 font-semibold hover:bg-gray-100 transition-all">
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-white px-[12px] py-[8px]  text-blue-950 font-semibold hover:bg-gray-100 transition-all">
                  Create New Account
                </button>
              </Link>
            </>
          )}
          {token !== null && (
            <div className="flex items-center gap-x-4">
              <div className="flex flex-col items-center gap-1">
                <p className="px-2 text-blue-950 cursor-pointer font-semibold text-[12px]">
                  Placement Year
                </p>
                <div className="px-2 text-blue-950 border-2 cursor-pointer font-semibold bg-gray-100 border-blue-950">
                  2024-25
                </div>
              </div>
              {/* Notification Icon - Toggles Notification Modal */}
              <AiFillNotification
                className="text-3xl text-blue-950 cursor-pointer hover:text-blue-900"
                onClick={toggleNotificationModal}
              />
              <ProfileDropdown />
              <p className="font-semibold text-blue-950">{user?.name}</p>
            </div>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <ul className="md:hidden bg-slate-300 text-gray-900 space-y-4 p-4">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/resources">Job Openings</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/events">Events</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/about-us">About</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer bg-blue-900 text-white font-semibold p-2 px-6 rounded-md max-w-max">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer bg-blue-900 text-white font-semibold p-2 px-6 rounded-md max-w-max">
            <Link to="/signup">Create Account</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer bg-blue-900 text-white font-semibold p-2 px-6 rounded-md max-w-max">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      )}

      {/* Notification Modal */}
      {isNotificationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-96 rounded-lg overflow-hidden shadow-lg">
            {/* Modal header */}
            <div className="bg-blue-950 text-white font-semibold p-3 flex justify-between">
              <div>NOTIFICATION</div>
              <button
                onClick={toggleNotificationModal}
                className="text-white underline cursor-pointer"
              >
                Close
              </button>
            </div>

            {/* Modal body */}
            <hr className="w-full h-1 bg-black" />
            <ul>
              {[
                {
                  title: "VISA Interview Schedule",
                  date: "20-10-2024 23:14 IST",
                },
                {
                  title: "EricssonEdge Academia Program",
                  date: "20-10-2024 17:27 IST",
                },
              ].map((notification, idx) => (
                <li
                  key={idx}
                  className={`p-3 ${idx % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <a href="#" className="text-blue-500 hover:underline">
                    {notification.title}
                  </a>
                  <p className="text-xs text-gray-600">{notification.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
