import React, { useState } from 'react';
import { ShortLink } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import URLShortenerForm from './components/ContentSummarizer'; // Repurposed component
import LinkList from './components/TrendingList'; // Repurposed component

const App: React.FC = () => {
    const [links, setLinks] = useState<ShortLink[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Generates a random 6-character string for IDs and short codes
    const generateShortCode = () => Math.random().toString(36).substring(2, 8);

    const handleShortenUrls = (urls: string[]) => {
        setIsLoading(true);

        // Simulate an API call to a backend
        setTimeout(() => {
            const newLinks = urls.map(url => ({
                id: generateShortCode(),
                originalUrl: url,
                shortCode: generateShortCode(),
                createdAt: new Date().toLocaleDateString(),
            }));
            setLinks(prevLinks => [...newLinks, ...prevLinks]);
            setIsLoading(false);
        }, 1000);
    };

    const handleDeleteLink = (id: string) => {
        setLinks(prevLinks => prevLinks.filter(link => link.id !== id));
    };

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <Header />
                    <URLShortenerForm onShorten={handleShortenUrls} isLoading={isLoading} />
                    <LinkList links={links} onDeleteLink={handleDeleteLink} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;