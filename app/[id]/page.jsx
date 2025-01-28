import dbConnect from '@/utils/mongodb';
import Url from '@/models/Url';

export default async function ShortCodePage({ params }) {
  console.log('params', params?.url?.pathname);
  
    const { shortCode } = params;

  await dbConnect();

  // Fetch the URL from the database
  const urlEntry = await Url.findOne({ shortCode });

  if (!urlEntry) {
    return (
      <div>
        <h1>404 - URL Not Found</h1>
      </div>
    );
  }

  // Increment the click count
  urlEntry.clicks += 1;
  await urlEntry.save();

  return (
    <iframe
      src={urlEntry.originalUrl}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
    />
  );
}
