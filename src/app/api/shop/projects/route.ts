import { getCollection } from '@/firebase/firestore/getData'
import { NextResponse } from 'next/server'

export async function GET() {
  const { result, responseError } = await getCollection('projects')
  return NextResponse.json({ result, responseError })
}
