import React from 'react';
import { LinkIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="text-center py-6 mb-8">
      <div className="flex items-center justify-center gap-3 mb-2">
        <LinkIcon className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-extrabold text-gray-800">DigitalRecap</h1>
      </div>
      <p className="text-lg text-gray-500">
        YouTube URL Shortener
      </p>
    </header>
  );
};

export default Header;