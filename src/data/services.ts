import { Battery, CircleGauge, Droplets, Disc3, Wrench, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  { title: 'Periodic Service', description: 'Routine maintenance to keep your bike performing smoothly.', icon: CircleGauge },
  { title: 'Oil Change', description: 'Engine oil replacement with the right care for your bike.', icon: Droplets },
  { title: 'Brake Service', description: 'Inspection and maintenance for safer, more confident rides.', icon: Disc3 },
  { title: 'Battery Service', description: 'Battery checks, replacement and starting-system support.', icon: Battery },
  { title: 'Tyre Service', description: 'Tyre inspection, replacement and basic wheel care.', icon: Truck },
  { title: 'General Repair', description: 'Everyday repairs handled by service professionals.', icon: Wrench },
]
