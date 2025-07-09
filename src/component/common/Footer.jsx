import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="px-4">

        {/* Top Section with Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm w-full">
          
          {/* Column 1: Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-2">CONTACT</h4>
            <p>Address: Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya Pradesh, India 462003</p>
            <p>Telephone: +91 9798571703, 4052000</p>
            <p>Fax: +91 755 2670562</p>
            <p>Email: <a href="mailto:placementcell.nitb@gmail.com" className="underline hover:text-gray-300">placementcell.nitb@gmail.com</a></p>
            <p>Email: <a href="mailto:officeofdirector@manit.ac.in" className="underline hover:text-gray-300">officeofdirector@manit.ac.in</a></p>
            <p>Web: <a href="https://www.manit.ac.in" className="underline hover:text-gray-300">www.manit.ac.in</a></p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Registration / Examination</a></li>
              <li><a href="#" className="hover:text-gray-300">NIRF</a></li>
              <li><a href="#" className="hover:text-gray-300">ARIIA 2021</a></li>
              <li><a href="#" className="hover:text-gray-300">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-gray-300">House Allotment</a></li>
            </ul>
          </div>

          {/* Column 3: Fixed Menu */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Fixed Menu</h4>
            <ul>
              <li><a href="https://www.manit.ac.in/sites/default/files/documents/Manit%20Logo%20color_0.jpg" className="hover:text-gray-300" target='_blank'>Download MANIT Logo</a></li>
              <li><a href="#" className="hover:text-gray-300">Conferences / Workshops</a></li>
              <li><a href="#" className="hover:text-gray-300">Admission</a></li>
              <li><a href="#" className="hover:text-gray-300">Student Placement</a></li>
              <li><a href="#" className="hover:text-gray-300">Archi Adda</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex justify-between items-center text-xs">
          
          {/* Links */}
          <div className="space-x-2">
            <a href="#" className="hover:text-gray-300">Accessibility Statement</a> | 
            <a href="#" className="hover:text-gray-300">Copyright Policy</a> | 
            <a href="#" className="hover:text-gray-300">Hyperlinking Policy</a> | 
            <a href="#" className="hover:text-gray-300">Privacy Policy</a> | 
            <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>© 2024 All Rights Reserved Terms of Use and Privacy Policy</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;