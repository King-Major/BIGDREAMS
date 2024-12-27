/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET(
  request: Request,
  { params }: any
) {
  return Response.redirect(
    `https://via.placeholder.com/${params.width}x${params.height}`
  );
}