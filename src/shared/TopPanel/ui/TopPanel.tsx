import '../styles/TopPanel.css'
import { type ReactNode } from 'react'

export interface TopPanelProps {
  children?: ReactNode
}

export function TopPanel ({ children }: TopPanelProps) {
  return <div className='top-panel'>
      {children}
    </div>
}
