'use client';
import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { ExternalLink, Copy, Plus, Check } from 'lucide-react';

export default function ActionButtons({ originalUrl }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(originalUrl);
      setIsCopied(true);
      toast.success('URL copied to clipboard!', {
        duration: 2000,
        position: 'bottom-right',
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy URL', {
        duration: 2000,
        position: 'bottom-right',
      });
    }
  };

  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center space-x-4">
        <button
          onClick={() => window.open(originalUrl, '_blank')}
          className="group relative flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Open in New Tab</span>
          <span className="absolute inset-0 flex items-center justify-center bg-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
              Visit Site →
            </span>
          </span>
        </button>

        <button
          onClick={handleCopy}
          disabled={isCopied}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${
            isCopied
              ? 'bg-green-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {isCopied ? (
            <>
              <Check className="w-5 h-5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span>Copy URL</span>
            </>
          )}
        </button>

        <Link 
          href="/"
          className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Plus className="w-5 h-5" />
          <span>Create New</span>
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-3">
        <button
          onClick={() => window.open(originalUrl, '_blank')}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-md"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Open Link</span>
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCopy}
            disabled={isCopied}
            className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 shadow-md ${
              isCopied
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {isCopied ? (
              <>
                <Check className="w-5 h-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Copy</span>
              </>
            )}
          </button>

          <Link 
            href="/"
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-md"
          >
            <Plus className="w-5 h-5" />
            <span>New</span>
          </Link>
        </div>
      </div>
    </div>
  );
}