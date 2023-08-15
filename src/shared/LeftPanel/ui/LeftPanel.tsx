import { type ReactNode } from 'react'
import '../styles/LeftPanel.css'

export interface LeftPanelProps {
  children?: ReactNode
}
export function LeftPanel ({ children }: LeftPanelProps) {
  return <div className='left-panel'>
        {children}
    </div>
}
