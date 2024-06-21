import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const enableLoginPage = process.env.COOKIE_TO_ENABLE_LOGIN_PAGE || ''
  const isLogin = request.cookies.get(enableLoginPage)?.value

  if (isLogin) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/shop', request.url))
  }
}
export const config = {
  matcher: ['/login'],
}
