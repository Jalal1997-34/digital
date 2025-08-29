
import React from 'react';

interface ContentInputProps {
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}

const ContentInput: React.FC<ContentInputProps> = ({ value, onChange, isLoading }) => {
  return (
    <div className="w-full">
      <label htmlFor="content-input" className="block text-sm font-medium text-gray-700 mb-2">
        Paste your content here (e.g., video transcript, article, social media post)
      </label>
      <textarea
        id="content-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={isLoading}
        placeholder="Start typing or paste your content..."
        className="w-full h-48 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 resize-y disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default ContentInput;
