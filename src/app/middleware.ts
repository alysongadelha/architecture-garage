import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log('first middleware', request.url)
  return NextResponse.redirect(new URL('/shop', request.url))
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about-us/hello',
}
