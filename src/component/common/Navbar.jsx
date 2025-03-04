import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../core/Auth/ProfileDropdown';
import { MdNotificationAdd } from 'react-icons/md';
 
const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNotificationModal = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-blue-950 text-white z-50 ">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-4">
           <Link to="/">
           <img
              src="../src/assets/logo.png"
              alt="MANIT Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
           </Link>
            <div className="text-center md:text-left">
              <h1 className="text-lg md:text-2xl font-extrabold font-serif">
                Training and Placement Cell
              </h1>
              <h6 className="text-sm md:text-base mt-1 leading-snug font-serif">
                Maulana Azad National Institute Of Technology Bhopal
              </h6>
            </div>
          </div>

          {/* Main Links */}
          <ul className="hidden md:flex gap-6 pl-8">
            {[
              { label: 'Home', path: '/' },
              { label: 'Opportunities', path: '/jobboard' },
              { label: 'For Recruiters', path: '/ForRecruiters' },
              { label: 'Placement Statistics', path: '/PlacementStatistics' },
              { label: 'About', path: '/AboutUs' },
              // { label: 'Our Team', path: '/ourTeam' },
              
            ].map((link, index) => (
              <li key={index} className="text-base md:text-lg font-medium relative">
                <Link
                  to={link.path}
                  className="hover:text-gray-300 transition hover:scale-105 transform hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md"
                >
                  {link.label}
                </Link>
              </li> 
            ))}
          </ul>  

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-6">
            {token === null ? (
              <>
                <Link to="/login">
                  <button className="px-5 py-2 border border-white text-white rounded-md hover:bg-white hover:text-blue-950 transition text-sm md:text-base font-medium">
                    Sign in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-5 py-2 bg-white text-blue-950 rounded-md hover:bg-gray-200 transition text-sm md:text-base font-medium">
                    Create Account
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-6">
                {/* Profile Section */}
                <div className="flex flex-col items-center text-center">
                  <span className="text-xs text-gray-400">Placement Year</span>
                  <div className="px-3 py-1 bg-gray-100 text-blue-950 font-semibold rounded-md border border-white text-sm md:text-base">
                    2024-25
                  </div>
                </div>

                {/* Notification Icon */}
                <button onClick={toggleNotificationModal}>
                  <MdNotificationAdd className="text-2xl md:text-3xl text-white hover:text-gray-300" />
                </button>

                {/* Profile Dropdown */}
                <ProfileDropdown />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-white bg-opacity-95 border-t border-gray-200 shadow-md p-4 space-y-4 text-blue-950">
            {[
              { label: 'Home', path: '/' },
              { label: 'Opportunities', path: '/jobboard' },
              { label: 'Events', path: '/events' },
              { label: 'About', path: '/about-us' },
            ].map((link, index) => (
              <li key={index} className="hover:text-blue-700 transition text-base font-medium">
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            {token === null ? (
              <>
                <li className="hover:bg-blue-950 text-center text-white font-semibold py-2 rounded-md transition bg-blue-950 text-sm">
                  <Link to="/login">Login</Link>
                </li>
                <li className="hover:bg-blue-950 text-center text-white font-semibold py-2 rounded-md transition bg-blue-950 text-sm">
                  <Link to="/signup">Create Account</Link>
                </li>
              </>
            ) : (
              <li className="hover:text-blue-700 transition text-sm">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        )}
      </nav>

      {/* Padding to main content to prevent overlap with the fixed Navbar */}
      <div className="pt-24">
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default Navbar;
