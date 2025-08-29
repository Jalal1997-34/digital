import React, { useState } from 'react';
import { ShortLink } from '../types';
import { CopyIcon, CheckIcon, QrCodeIcon, TrashIcon, ExternalLinkIcon } from './icons';

// A simple QR code generator component using an external API
const QRCode: React.FC<{ text: string }> = ({ text }) => (
    <div className="p-2 bg-white rounded-md shadow-lg border">
        <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`} 
            alt="QR Code" 
            width="150" 
            height="150"
        />
    </div>
);


interface LinkListItemProps {
  link: ShortLink;
  onDelete: (id: string) => void;
}

const LinkListItem: React.FC<LinkListItemProps> = ({ link, onDelete }) => {
    const [copied, setCopied] = useState(false);
    const [showQr, setShowQr] = useState(false);
    const shortUrl = `https://digitalrecap.com/${link.shortCode}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-grow overflow-hidden">
                <p className="text-sm text-gray-500 truncate" title={link.originalUrl}>{link.originalUrl}</p>
                <a
                    href={link.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-600 hover:underline"
                >
                    {shortUrl}
                    <ExternalLinkIcon className="w-4 h-4 inline-block ml-1" />
                </a>
                <p className="text-xs text-gray-400 mt-1">Created: {link.createdAt}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
                <div className="relative">
                    <button
                        onMouseEnter={() => setShowQr(true)}
                        onMouseLeave={() => setShowQr(false)}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all"
                        aria-label="Show QR Code"
                    >
                        <QrCodeIcon className="w-5 h-5" />
                    </button>
                    {showQr && (
                        <div className="absolute bottom-full right-0 mb-2 z-10">
                            <QRCode text={shortUrl} />
                        </div>
                    )}
                </div>
                <button
                    onClick={handleCopy}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all"
                    aria-label="Copy short URL"
                >
                    {copied ? <CheckIcon className="w-5 h-5 text-green-600" /> : <CopyIcon className="w-5 h-5" />}
                </button>
                <button
                    onClick={() => onDelete(link.id)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-all"
                    aria-label="Delete link"
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            </div>
        </li>
    );
};


interface LinkListProps {
  links: ShortLink[];
  onDeleteLink: (id: string) => void;
}

const LinkList: React.FC<LinkListProps> = ({ links, onDeleteLink }) => {
    if (links.length === 0) {
        return (
            <div className="text-center py-10 px-4 bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
                <p className="text-gray-500">Your shortened links will appear here.</p>
            </div>
        );
    }

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Links</h2>
            <ul className="space-y-4">
                {links.map(link => (
                    <LinkListItem key={link.id} link={link} onDelete={onDeleteLink} />
                ))}
            </ul>
        </div>
    );
};

export default LinkList;