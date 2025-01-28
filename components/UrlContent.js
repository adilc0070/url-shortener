'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function UrlContent({ url }) {
  const [iframeError, setIframeError] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('URL copied to clipboard!', {
        duration: 2000,
        position: 'bottom-right',
      });
    } catch (error) {
      toast.error('Failed to copy URL', {
        duration: 2000,
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className="flex-1">
      {iframeError ? (
        <div className="h-[calc(100vh-68px)] flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-2xl p-8 bg-white rounded-lg shadow-xl text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Unable to Display Content
            </h2>
            <p className="text-gray-600 mb-6">
              This website cannot be displayed in an embedded view due to security restrictions.
              You can:
            </p>
            <div className="space-y-4">
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                Open Website Directly
              </a>
              <button
                onClick={handleCopy}
                className="block w-full px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all transform hover:scale-105"
              >
                Copy URL to Clipboard
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Some websites prevent embedding for security reasons. This is normal and helps protect both you and the website.
            </p>
          </div>
        </div>
      ) : (
        <iframe
          src={url}
          className="w-full h-[calc(100vh-68px)] border-none"
          title="URL content"
          onError={() => setIframeError(true)}
          onLoad={(e) => {
            try {
              e.target.contentWindow.location.href;
            } catch (error) {
              setIframeError(true);
            }
          }}
        />
      )}
    </div>
  );
}