import React from 'react';
const Footer = () => {
  return (
    <footer  className="bg-white pt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-16 pb-12">

          {/* Column 1: Logo and Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              {/* Logo/Icon placeholder matching the image */}
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded mr-2 text-white font-bold">
                IE
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                IELTS Excellence
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-sm">
              Empowering students worldwide to achieve their IELTS goals through innovative teaching methods, personalized guidance, and cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div id="#contacts" className="space-y-2 text-gray-600 text-sm">
              <p className="flex items-center">
                <span className="mr-3">📧</span> info@ieltsexcellence.com
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span> +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <span className="mr-3">📍</span> 123 Education Street, Learning City, LC 12345
              </p>
            </div>
          </div>

          {/* Column 2, 3, 4: Link Groups */}
          {/* We use a sub-grid or simple divs for the remaining 3 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8 md:gap-10">

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['home', 'courses', 'contacts'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Courses</h4>
              <ul className="space-y-2 text-sm">
                {['IELTS Academic', 'IELTS General', 'Speaking Practice', 'Writing Skills'].map((item) => (
                  <li key={item}>
                    <h3 href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                      {item}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                {['Help Center', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
                  <li key={item}>
                    <h3 href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                      {item}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-100 mt-4">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 IELTS Excellence. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors"
                aria-label={platform}
              >
                {/* Placeholder for actual social icons */}
                {platform.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;