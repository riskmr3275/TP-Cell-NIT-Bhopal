import React, { useState } from "react";

function StudentProfile() {
  // Sample data for initial student list
  const initialStudents = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", branch: "CSE" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", branch: "ECE" }
  ];

  // State for managing students
  const [students, setStudents] = useState(initialStudents);
  const [form, setForm] = useState({ id: null, name: "", email: "", branch: "" });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle add or update student
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      // Update existing student
      setStudents(
        students.map((student) =>
          student.id === form.id ? { ...form } : student
        )
      );
    } else {
      // Add new student
      setStudents([...students, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, name: "", email: "", branch: "" });
  };

  // Edit student
  const editStudent = (student) => {
    setForm(student);
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-32 pb-16 w-full">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center font-serif text-blue-900 mb-12">
          Student Profile Management
        </h2>
        
        {/* Add/Edit Student Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-lg shadow-lg font-sans mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            {form.id ? "Edit" : "Add"} Student
          </h3>
          <div className="mb-6">
            <label className="block font-medium text-lg mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium text-lg mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium text-lg mb-2">Branch</label>
            <input
              type="text"
              name="branch"
              value={form.branch}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
            />
          </div>
          <button type="submit" className="bg-blue-950 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300 hover:bg-blue-800">
            {form.id ? "Update" : "Add"} Student
          </button>
        </form>

        {/* List of Students */}
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg font-sans">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Student List</h3>
          {students.length > 0 ? (
            <ul className="space-y-6">
              {students.map((student) => (
                <li
                  key={student.id}
                  className="p-6 bg-gray-50 rounded-lg flex justify-between items-center shadow-md"
                >
                  <div>
                    <h4 className="font-bold text-xl text-gray-700">{student.name}</h4>
                    <p className="text-gray-600 text-lg">{student.email}</p>
                    <p className="text-sm text-gray-500">{student.branch}</p>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => editStudent(student)}
                      className="bg-green-600 text-white px-5 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-green-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="bg-red-600 text-white px-5 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-lg">No students found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
