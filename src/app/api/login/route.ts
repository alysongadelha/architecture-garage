import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

enum MessageEnum {
  ERROR_RESPONSE = 'Invalid login response from server',
  NOT_FOUND_RESPONSE = 'User not found',
  SUCCESS_RESPONSE = 'Login successful',
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    cookies().delete({
      name: 'token',
      httpOnly: true,
    })

    return NextResponse.json(
      { authorized: false, message: MessageEnum.NOT_FOUND_RESPONSE },
      { status: 404 },
    )
  }
  const token = await response.json()

  if (!token?.token) {
    cookies().delete({
      name: 'token',
      httpOnly: true,
    })

    return NextResponse.json(
      { authorized: false, message: MessageEnum.ERROR_RESPONSE },
      { status: 400 },
    )
  }

  cookies().set({
    name: 'token',
    value: token.token,
    httpOnly: true,
    secure: true,
  })

  const data = await getPerfil()

  return NextResponse.json({
    data,
    authorized: true,
    message: MessageEnum.SUCCESS_RESPONSE,
  })
}

export const GET = async () => {
  const data = (await getPerfil()) as { autorizado: string }

  if (!data.autorizado) return NextResponse.json({ data }, { status: 400 })

  return NextResponse.json({ data })
}

const getPerfil = async () => {
  const token = cookies().get('token')

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token?.value}`,
    },
  })

  return await response.json()
}
