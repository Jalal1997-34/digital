import React from 'react';
import { AppView } from '../types';
import { VideoIcon, DocumentTextIcon } from './icons';

interface AppNavigatorProps {
  activeView: AppView;
  onViewChange: (view: AppView) => void;
}

const NAV_OPTIONS = [
  { view: AppView.Videos, label: 'Trending Videos', icon: VideoIcon },
  { view: AppView.Summarizer, label: 'Content Summarizer', icon: DocumentTextIcon },
];

const AppNavigator: React.FC<AppNavigatorProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="flex items-center bg-gray-200 p-1.5 rounded-xl">
        {NAV_OPTIONS.map(({ view, label, icon: Icon }) => (
          <button
            key={view}
            onClick={() => onViewChange(view)}
            className={`flex items-center justify-center gap-2 w-full px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              activeView === view
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-gray-600 hover:bg-gray-300/50'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AppNavigator;