import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { width: string; height: string } }
) {
  const width = params.width
  const height = params.height
  const imageUrl = `https://via.placeholder.com/${width}x${height}`

  return NextResponse.redirect(imageUrl)
}