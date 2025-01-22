// app/api/[shortCode]/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../utils/mongodb';
import Url from '../../../models/Url';

export async function GET(request, { params }) {
  const { shortCode } = params;
  console.log('shortCode', shortCode);
  await dbConnect();
  const url = await Url.findOne({ shortCode });
  
  if (!url) {
    console.log('URL not found');
    return NextResponse.json({ error: 'URL not found' }, { status: 404 });
  }
  
  url.clicks += 1;
  await url.save();
  
  return NextResponse.redirect(url.originalUrl);
}