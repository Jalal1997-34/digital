
import React from 'react';
import { Language, OutputType } from '../types';
import { LANGUAGE_OPTIONS, OUTPUT_TYPE_OPTIONS } from '../constants';

interface OptionsBarProps {
  language: Language;
  setLanguage: (language: Language) => void;
  outputType: OutputType;
  setOutputType: (outputType: OutputType) => void;
  isLoading: boolean;
}

const OptionsBar: React.FC<OptionsBarProps> = ({
  language,
  setLanguage,
  outputType,
  setOutputType,
  isLoading,
}) => {
  const renderOptionButtons = <T extends string>(
    options: { value: T; label: string }[],
    selectedValue: T,
    setter: (value: T) => void
  ) => {
    return (
      <div className="flex items-center bg-gray-100 p-1 rounded-lg">
        {options.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setter(value)}
            disabled={isLoading}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed ${
              selectedValue === value
                ? 'bg-white text-blue-600 shadow'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    );
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
        <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Output Language</h3>
            {renderOptionButtons(LANGUAGE_OPTIONS, language, setLanguage)}
        </div>
        <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Content Type</h3>
            {renderOptionButtons(OUTPUT_TYPE_OPTIONS, outputType, setOutputType)}
        </div>
    </div>
  );
};

export default OptionsBar;
