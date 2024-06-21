import MaintenanceDiv from '@/components/MaintenanceDiv'
import { redirect } from 'next/navigation'

export default async function Custom404() {
  setTimeout(() => redirect('/'), 2000)
  return <MaintenanceDiv page={'CUSTOM 404'} />
}
