import { getCollection } from '@/firebase/firestore/getData'
import { NextResponse } from 'next/server'

export const revalidate = 60

export async function GET() {
  const { projects, error } = await getCollection('projects')
  return NextResponse.json({ projects, error })
}
