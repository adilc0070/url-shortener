import dbConnect from '@/utils/mongodb';
import Url from '@/models/Url';
import Link from 'next/link';
import ActionButtons from '@/components/ActionButtons';
import UrlContent from '@/components/UrlContent';

export default async function ShortCodePage({ params }) {
  const { shortCode } = params;
  await dbConnect();

  const urlEntry = await Url.findOne({ shortCode });

  if (!urlEntry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">404 - URL Not Found</h1>
          <p className="text-gray-600">The requested short URL does not exist.</p>
          <Link 
            href="/" 
            className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  // Increment the click count
  urlEntry.clicks += 1;
  await urlEntry.save();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Short URL: {shortCode}
            </h1>
            <span className="text-sm text-gray-500">
              Clicks: {urlEntry.clicks}
            </span>
          </div>
          <ActionButtons originalUrl={urlEntry.originalUrl} />
        </div>
      </div>
      <UrlContent url={urlEntry.originalUrl} />
    </div>
  );
}