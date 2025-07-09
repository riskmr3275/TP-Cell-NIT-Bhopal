import React, { useState } from 'react';

const OfferLetterUpload = () => {
    const [formData, setFormData] = useState({
        company: '',
        offerLetterNo: '',
        offerLetterDate: '',
        offerLetterFile: null
    });

    const { company, offerLetterNo, offerLetterDate, offerLetterFile } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, offerLetterFile: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!company || !offerLetterNo || !offerLetterDate || !offerLetterFile) {
            alert('Please fill in all fields and upload a file');
            return;
        }
        // Handle the form data submission
        console.log(formData);
    };

    return (
        <div className="flex justify-center min-h-screen bg-gray-100 w-full">
            <div className="w-full   bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6 bg-blue-400 p-4 rounded-md shadow-xl text-white">Upload Offer Letter</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Company</label>
                        <select
                            name="company"
                            value={company}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="">Select Company</option>
                            <option value="Company A">Company A</option>
                            <option value="Company B">Company B</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Offer Letter No.</label>
                        <input
                            type="text"
                            name="offerLetterNo"
                            value={offerLetterNo}
                            onChange={handleInputChange}
                            placeholder="Enter offer letter no."
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Offer Letter Date</label>
                        <input
                            type="date"
                            name="offerLetterDate"
                            value={offerLetterDate}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Offer Letter (PDF, Max Size: 4MB)</label>
                        <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-950 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition"
                    >
                        Upload Offer Letter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OfferLetterUpload;
