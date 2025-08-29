import React from 'react';
import { TrendingContent, Language, OutputType, SourcePlatform } from '../types';
import { CloseIcon, ExternalLinkIcon, SparklesIcon, YouTubeIcon, TikTokIcon } from './icons';
import OptionsBar from './OptionsBar';
import ResultDisplay from './ResultDisplay';

interface ContentDetailModalProps {
  content: TrendingContent;
  onClose: () => void;
  language: Language;
  setLanguage: (language: Language) => void;
  outputType: OutputType;
  setOutputType: (outputType: OutputType) => void;
  onGenerate: () => void;
  result: string;
  isLoading: boolean;
  error: string | null;
}

const SourceInfo: React.FC<{ source: SourcePlatform }> = ({ source }) => {
  const icon = source === SourcePlatform.YouTube 
    ? <YouTubeIcon className="w-5 h-5 text-red-600" /> 
    : <TikTokIcon className="w-5 h-5 text-black" />;
    
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm font-semibold text-gray-600">{source}</span>
    </div>
  );
};

const ContentDetailModal: React.FC<ContentDetailModalProps> = ({
  content, onClose, language, setLanguage, outputType, setOutputType, onGenerate, result, isLoading, error
}) => {
  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800 truncate pr-4">{content.title}</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
            <CloseIcon className="w-6 h-6 text-gray-600" />
          </button>
        </header>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 p-6 overflow-y-auto">
          {/* Left Column: Video Info */}
          <div className="space-y-4">
            <img src={content.thumbnailUrl} alt={content.title} className="w-full rounded-lg aspect-video object-cover bg-gray-200" />
            <div className="flex items-center justify-between">
                <SourceInfo source={content.source} />
                <a
                  href={content.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-all"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  <span>Watch on {content.source}</span>
                </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Content Transcript/Text</h3>
              <p className="text-sm text-gray-600 bg-gray-100 p-3 rounded-md max-h-48 overflow-y-auto">{content.content}</p>
            </div>
          </div>

          {/* Right Column: AI Tools */}
          <div className="space-y-4 flex flex-col">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">AI Analysis Tools</h3>
              <OptionsBar
                language={language}
                setLanguage={setLanguage}
                outputType={outputType}
                setOutputType={setOutputType}
                isLoading={isLoading}
              />
              <button
                  onClick={onGenerate}
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <SparklesIcon className="w-5 h-5" />
                      <span>Generate Recap</span>
                    </>
                  )}
                </button>
            </div>
            <div className="flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-2">AI Generated Result</h3>
              <div className="flex-grow">
                <ResultDisplay result={result} isLoading={isLoading} error={error} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailModal;