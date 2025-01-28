'use client';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function ActionButtons({ originalUrl }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(originalUrl);
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
    <div className="flex items-center space-x-4">
      <button
        onClick={() => window.open(originalUrl, '_blank')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Open in New Tab
      </button>
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        Copy Original URL
      </button>
      <Link 
        href="/"
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
      >
        Create New
      </Link>
    </div>
  );
}