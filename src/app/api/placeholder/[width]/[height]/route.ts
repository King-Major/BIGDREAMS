import { type NextRequest } from 'next/server';

export async function GET(
  _request: NextRequest,
  context: { params: { width: string; height: string } }
) {
  const { width, height } = context.params;
  
  // Construct the image URL and return Response directly instead of using NextResponse
  return Response.redirect(`https://via.placeholder.com/${width}x${height}`);
}