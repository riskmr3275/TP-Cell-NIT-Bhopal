import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Importing icons
import { Mail, Phone, ChevronRight, Calendar } from 'react-feather';


// Notice Board Component
const NoticeBoard = () => (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4 justify-start">Notice Board</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Important Notices</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
            <p>Upcoming campus recruitment drive for XYZ Corp on July 15, 2023. All final year students are eligible.</p>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
            <p>Resume building workshop scheduled for June 25, 2023. Attendance is mandatory for all pre-final year students.</p>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
            <p>Last date for summer internship applications is May 31, 2023. Submit your applications to the placement office.</p>
          </li>
        </ul>
      </div>
    </section>
  );

  export default NoticeBoard;