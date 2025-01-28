import dbConnect from '@/utils/mongodb';
import Url from '@/models/Url';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const shortCode = searchParams.get('shortCode');

  if (!shortCode) {
    return new Response(JSON.stringify({ error: 'Short code is required' }), { status: 400 });
  }

  await dbConnect();

  const urlEntry = await Url.findOne({ shortCode });

  if (!urlEntry) {
    return new Response(JSON.stringify({ error: 'URL not found' }), { status: 404 });
  }

  // Increment the click count
  urlEntry.clicks += 1;
  await urlEntry.save();

  return new Response(
    JSON.stringify({ originalUrl: urlEntry.originalUrl }),
    { status: 200 }
  );
}
