// app/api/shorten/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../utils/mongodb';
import Url from '../../../models/Url';
import generateShortCode from '../../../utils/generateShortCode';

export async function POST(request) {
  const { url } = await request.json();
  
  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }
  
  await dbConnect();
  
  const existingUrl = await Url.findOne({ originalUrl: url });
  if (existingUrl) {
    return NextResponse.json({ shortCode: existingUrl.shortCode });
  }
  
  let shortCode;
  let isUnique = false;
  while (!isUnique) {
    shortCode = generateShortCode();
    const exists = await Url.findOne({ shortCode });
    if (!exists) {
      isUnique = true;
    }
  }
  
  const newUrl = new Url({
    originalUrl: url,
    shortCode,
  });
  
  await newUrl.save();
  return NextResponse.json({ shortCode }, { status: 201 });
}