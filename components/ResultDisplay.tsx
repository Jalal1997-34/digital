
import React, { useState, useEffect } from 'react';
import { CopyIcon, CheckIcon } from './icons';

interface ResultDisplayProps {
  result: string;
  isLoading: boolean;
  error: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, isLoading, error }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
    }
  };
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-3"></div>
          <p>Generating insights...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-full text-red-600 bg-red-50 p-4 rounded-lg">
          <p>{error}</p>
        </div>
      );
    }
    
    if (result) {
      return (
        <>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 p-2 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-200"
              aria-label="Copy to clipboard"
            >
              {copied ? <CheckIcon className="w-5 h-5 text-green-600" /> : <CopyIcon className="w-5 h-5" />}
            </button>
            <div className="prose prose-sm max-w-none whitespace-pre-wrap">
              {result}
            </div>
        </>
      );
    }

    return (
        <div className="flex items-center justify-center h-full text-gray-400">
            <p>Your generated content will appear here.</p>
        </div>
    );
  };
  
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[200px] relative">
      {renderContent()}
    </div>
  );
};

export default ResultDisplay;
