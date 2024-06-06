import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export default function SidebarButton({text,className = "",child, ...props}) {
  return (
    <Button variant="ghost" className={cn("justify-start", className)} {...props}  >
       
       <span className='text-primary'>{text}</span>
        </Button>
  )
}
