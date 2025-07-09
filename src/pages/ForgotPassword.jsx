import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-6 lg:p-10">
        <div className="w-full max-w-md">
          {/* MANIT Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="../public/logo.png" // Update with the correct MANIT logo path
              alt="MANIT Bhopal Logo"
              className="h-20 lg:h-24"
            />
          </div>

          {/* Page Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-center text-blue-950">
            TRAINING AND PLACEMENT CELL
          </h1>
          <h2 className="text-center text-lg mt-2 text-gray-600">
            Maulana Azad National Institute of Technology, Bhopal
          </h2>

          {/* Form Section */}
          <h3 className="text-xl lg:text-2xl mt-8 font-semibold text-center lg:text-left">
            Forgot Password
          </h3>
          <p className="text-gray-600 mb-4 text-center lg:text-left">
            Please enter your identity so we can send you an email to reset your password.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email/User ID</label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email/User ID"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 flex justify-between">
            <a href="/createaccount" className="text-blue-950 hover:underline">
              Create Account
            </a>
            <a href="/login" className="text-blue-950 hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="../public/hh2.jpg" // Update with MANIT Bhopal image
          alt="MANIT Bhopal"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
