import React from 'react';
import { TrendingContent, SourcePlatform } from '../types';
import { YouTubeIcon, TikTokIcon } from './icons';

const SourceIcon: React.FC<{ source: SourcePlatform }> = ({ source }) => {
  switch (source) {
    case SourcePlatform.YouTube:
      return <YouTubeIcon className="w-5 h-5 text-red-600" />;
    case SourcePlatform.TikTok:
      return <TikTokIcon className="w-5 h-5 text-black" />;
    default:
      return null;
  }
};

interface TrendingItemProps {
  item: TrendingContent;
  onSelect: (item: TrendingContent) => void;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ item, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(item)}
      className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-200/80"
    >
      <div className="relative">
        <img 
          src={item.thumbnailUrl} 
          alt={item.title}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <SourceIcon source={item.source} />
          <span className="text-xs font-semibold text-gray-500 uppercase">{item.source}</span>
        </div>
        <h3 className="font-bold text-gray-800 leading-tight h-12 overflow-hidden">{item.title}</h3>
      </div>
    </button>
  );
};

export default TrendingItem;
