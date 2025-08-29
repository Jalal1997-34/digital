import React, { useState } from 'react';
import { LinkIcon } from './icons';

interface URLShortenerFormProps {
  onShorten: (urls: string[]) => void;
  isLoading: boolean;
}

const URLShortenerForm: React.FC<URLShortenerFormProps> = ({ onShorten, isLoading }) => {
    const [urls, setUrls] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const urlArray = urls.split('\n').map(url => url.trim()).filter(url => url);
        if (urlArray.length > 0) {
            onShorten(urlArray);
            setUrls('');
        }
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200/80">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-2">
                        Enter one or more YouTube URLs (one per line)
                    </label>
                    <textarea
                        id="url-input"
                        value={urls}
                        onChange={(e) => setUrls(e.target.value)}
                        disabled={isLoading}
                        placeholder="https://www.youtube.com/watch?v=...\nhttps://youtu.be/..."
                        className="w-full h-32 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 resize-y"
                        aria-label="YouTube URLs to shorten"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading || !urls.trim()}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Shortening...</span>
                        </>
                    ) : (
                        <>
                            <LinkIcon className="w-5 h-5" />
                            <span>Shorten URLs</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default URLShortenerForm;