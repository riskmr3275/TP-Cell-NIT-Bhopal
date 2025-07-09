import React, { useState } from "react";

const JobModal = ({ isOpen, onClose, onSubmit, formData, setFormData }) => {
  if (!isOpen) return null;

  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState(formData.eligibility?.skills || []);
  const [experience, setExperience] = useState(formData.eligibility?.experience || "");
  const [branch, setBranch] = useState(formData.eligibility?.branch || []);
  const [passingYear, setPassingYear] = useState(formData.eligibility?.passing_year || "");

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleBranchChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setBranch(selected);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const updatedForm = {
      ...formData,
      eligibility: {
        skills,
        experience: experience || undefined,
        branch,
        passing_year: passingYear,
      },
    };
  
    setFormData(updatedForm);
    onSubmit(updatedForm);  // ✅ pass full data
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Post a New Job</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">✕</button>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Job Title */}
          <div>
            <label className="block font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              name="job_title"
              value={formData.job_title}
              onChange={(e) => setFormData({ ...formData, job_title: e.target.value })}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="block font-medium text-gray-700">Job Description</label>
            <textarea
              name="job_description"
              value={formData.job_description}
              onChange={(e) => setFormData({ ...formData, job_description: e.target.value })}
              className="w-full border rounded px-3 py-2 h-24"
              required
            />
          </div>

          {/* Eligibility Section */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">Eligibility</h3>

            {/* Skills */}
            <div>
              <label className="block font-medium text-gray-700">Skills</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Add skill (e.g., React)"
                />
                <button type="button" onClick={handleAddSkill} className="px-4 bg-blue-600 text-white rounded">Add</button>
              </div>
              <div className="flex flex-wrap mt-2 gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    {skill}
                    <button type="button" onClick={() => handleRemoveSkill(skill)} className="text-red-500">×</button>
                  </span>
                ))}
              </div>
            </div>

            {/* Branch (Multi-select) */}
            <div>
              <label className="block font-medium text-gray-700 mt-4">Eligible Branch(es)</label>
              <select
                multiple
                value={branch}
                onChange={handleBranchChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="All">All</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl (or Cmd) to select multiple.</p>
            </div>

            {/* Passing Year */}
            <div className="mt-4">
              <label className="block font-medium text-gray-700">Passing Year</label>
              <input
                type="number"
                value={passingYear}
                onChange={(e) => setPassingYear(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g., 2025"
                required
              />
            </div>

            {/* Experience (Optional) */}
            <div className="mt-4">
              <label className="block font-medium text-gray-700">Experience (Optional)</label>
              <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g., Internship experience, personal projects"
              />
            </div>
          </div>

          {/* Salary & Location */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block font-medium text-gray-700">Salary</label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          {/* Post Date & Deadline */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block font-medium text-gray-700">Post Date</label>
              <input
                type="date"
                name="application_post_date"
                value={formData.application_post_date}
                onChange={(e) => setFormData({ ...formData, application_post_date: e.target.value })}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Deadline</label>
              <input
                type="date"
                name="application_deadline"
                value={formData.application_deadline}
                onChange={(e) => setFormData({ ...formData, application_deadline: e.target.value })}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
