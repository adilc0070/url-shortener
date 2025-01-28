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
        <div className="h-[calc(100vh-68px)] flex items-center justify-center bg-gray-50">
          <div className="max-w-2xl p-8 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cannot Display Content Directly
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
                className="block w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Open Website Directly
              </a>
              <button
                onClick={handleCopy}
                className="block w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
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