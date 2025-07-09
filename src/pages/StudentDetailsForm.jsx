import React, { useState } from "react";
import { useSelector } from "react-redux";
import States from "../utils/States";
const StudentDetailsForm = () => {
  const { user } = useSelector((state) => state.profile);
  const [sameAddress, setSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    passingYear: "2025",
    rollNo: `MCA/2023/${user.user_id}`,
    admissionYear: "2023",
    degree: "MCA",
    branch: "Computer Application",
    semester: "Third",
    primaryEmail: user?.email,
    instituteEmail: `${user.user_id}@stu.manit.ac.in`,
    primaryMobile: "",
    gender: "Female",
    reservationCategory: "GEN",
    bloodGroup: "O+ve",
    fatherName: "",
    motherName: "",
    fatherMobile: "",
    motherMobile: "",
    correspondenceCountry: "India",
    correspondenceState: "",
    correspondenceCity: "Ranchi",
    permanentCountry: "India",
    permanentState: "Madhya Pradesh",
    permanentCity: "Indore",
  });

  const handleSameAddressToggle = () => setSameAddress(!sameAddress);

  const inputField =
    "block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can implement further actions like sending data to an API here
  };

  return (
    <div className="p-4 w-full mx-auto bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Welcome {user?.name}</h1>
      <div className="mb-6 bg-blue-200 p-4 rounded-md">
        <h2 className="text-xl font-bold">ADD STUDENT PERSONAL DETAILS</h2>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Passing Year</label>
            <input
              type="text"
              name="passingYear"
              className={inputField}
              value={formData.passingYear}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Roll No.</label>
            <input
              type="text"
              name="rollNo"
              className={inputField}
              value={formData.rollNo}
              readOnly
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Adm. Year</label>
            <input
              type="text"
              name="admissionYear"
              className={inputField}
              value={formData.admissionYear}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Degree</label>
            <select
              name="degree"
              className={inputField}
              value={formData.degree}
              onChange={handleChange}
            >
              <option value="MCA">MCA</option>
            </select>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Branch</label>
            <select
              name="branch"
              className={inputField}
              value={formData.branch}
              onChange={handleChange}
            >
              <option value="Computer Application">Computer Application</option>
            </select>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Semester</label>
            <select
              name="semester"
              className={inputField}
              value={formData.semester}
              onChange={handleChange}
            >
              <option value="Third">Third</option>
            </select>
          </div>
        </div>

        {/* Personal Details */}
        <h3 className="text-xl font-semibold mt-6">Personal Details</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Primary Email ID</label>
            <input
              type="email"
              name="primaryEmail"
              className={inputField}
              value={formData.primaryEmail}
              readOnly
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Institute Email ID</label>
            <input
              type="email"
              name="instituteEmail"
              className={inputField}
              value={formData.instituteEmail}
              readOnly
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Primary Mobile No.</label>
            <input
              type="text"
              name="primaryMobile"
              className={inputField}
              value={formData.primaryMobile}
              onChange={handleChange}
              placeholder="+91 12345678"
            />
          </div>
        </div>

        {/* Other fields like Gender, Disability, etc. */}
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Gender</label>
            <select
              name="gender"
              className={inputField}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Reservation Category</label>
            <select
              name="reservationCategory"
              className={inputField}
              value={formData.reservationCategory}
              onChange={handleChange}
            >
              <option value="GEN">General</option>
              <option value="OBC">OBC (Other Backward Class)</option>
              <option value="ST">ST</option>
              <option value="SC">SC</option>
            </select>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              className={inputField}
              value={formData.bloodGroup}
              onChange={handleChange}
              placeholder="O+ve"
            />
          </div>
        </div>

        {/* Parent Details */}
        <h3 className="text-xl font-semibold mt-6">Parent Details</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              className={inputField}
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's name"
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              className={inputField}
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Mother's name"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Father's Mobile No.</label>
            <input
              type="text"
              name="fatherMobile"
              className={inputField}
              value={formData.fatherMobile}
              onChange={handleChange}
              placeholder="123455778"
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Mother's Mobile No.</label>
            <input
              type="text"
              name="motherMobile"
              className={inputField}
              value={formData.motherMobile}
              onChange={handleChange}
              placeholder="123455778"
            />
          </div>
        </div>

        {/* Address Details */}
        <h3 className="text-xl font-semibold mt-6">Address Details</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Correspondence Country</label>
            <select
              name="correspondenceCountry"
              className={inputField}
              value={formData.correspondenceCountry}
              onChange={handleChange}
            >
              <option value="India">India</option>
            </select>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Correspondence State</label>
            <select
              name="correspondenceState"
              className={inputField}
              value={formData.correspondenceState}
              onChange={handleChange}
              placeholder="State"
            >
              <option value="">Select State</option>
              {States.map((state) => (
                <option key={state.code} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Correspondence City</label>
            <input
              type="text"
              name="correspondenceCity"
              className={inputField}
              value={formData.correspondenceCity}
              onChange={handleChange}
              placeholder="City"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Permanent Country</label>
            <select
              name="permanentCountry"
              className={inputField}
              value={formData.permanentCountry}
              onChange={handleChange}
            >
              <option value="India">India</option>
            </select>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Permanent State</label>
            <input
              type="text"
              name="permanentState"
              className={inputField}
              value={formData.permanentState}
              onChange={handleChange}
              placeholder="State"
            />
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block mb-1">Permanent City</label>
            <input
              type="text"
              name="permanentCity"
              className={inputField}
              value={formData.permanentCity}
              onChange={handleChange}
              placeholder="City"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-max p-7 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default StudentDetailsForm;
