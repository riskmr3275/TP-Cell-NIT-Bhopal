import React, { useState } from 'react';

const SkillsForm = () => {
  const [skillType, setSkillType] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  const [characterLimit, setCharacterLimit] = useState(800);

  const handleSkillTypeChange = (e) => {
    setSkillType(e.target.value);
  };

  const handleSkillDescriptionChange = (e) => {
    setSkillDescription(e.target.value);
    setCharacterLimit(800 - e.target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    alert('Skill data saved');
  };

  return (
    <div className="flex justify-center mt-10 w-full bg-gray-100">
      <div className="w-full ">
        {/* Welcome Section */}
        <h2 className="text-lg font-bold  mb-4 bg-blue-400 text-white p-4 shadow-xl">Welcome </h2>

        {/* Skills Form */}
        <div className=" shadow-2xl   rounded-lg p-10 ">
          <h3 className="text-red-700 font-semibold mb-4">ADD SKILLS</h3>

          <form onSubmit={handleSubmit}>
            {/* Skill Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Skill Type</label>
              <select
                value={skillType}
                onChange={handleSkillTypeChange}
                className="mt-1 block w-max p-3 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                required
              >
                <option value="" disabled>Select type</option>
                <option value="Technical">Technical</option>
                <option value="Interpersonal">Interpersonal</option>
              </select>
            </div>

            {/* Skill Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Skill Description</label>
              <textarea
                value={skillDescription}
                onChange={handleSkillDescriptionChange}
                className="mt-1 block w-[30%] placeholder:p-3  rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                rows="4"
                placeholder="Enter skill description"
                maxLength={800}
                required
                pl
              />
              <p className="text-sm text-gray-500 mt-2">Character limit <span className="text-green-600">{characterLimit}</span></p>
            </div>

            {/* Save Data Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-950 text-white rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Save Data
              </button>
            </div>
          </form>
        </div>

        {/* Skills Section */}
        <div className="mt-8 px-8">
          <h4 className="text-gray-700 font-semibold">SKILLS</h4>
          {/* Example of where to display saved skills */}
          <p className="mt-4 text-gray-500">No skills added yet.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
