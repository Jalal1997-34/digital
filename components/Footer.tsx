import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 mt-8">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DigitalRecap. A fast and reliable URL shortener.
      </p>
    </footer>
  );
};

export default Footer;