// app/[shortCode]/page.js
import { redirect } from 'next/navigation';
import dbConnect from '../../utils/mongodb';
import Url from '../../models/Url';

export default async function ShortCodePage({ params }) {
  const { shortCode } = params;
  
  await dbConnect();
  const url = await Url.findOne({ shortCode });
  
  if (!url) {
    redirect('/'); // Redirect to home if short code not found
  }
  
  // Increment clicks
  url.clicks += 1;
  await url.save();
  
  redirect(url.originalUrl);
}