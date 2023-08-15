import { type ReactNode } from 'react'
import '../styles/RightPanel.css'
export interface RightPanelProps {
  children?: ReactNode
}

export function RightPanel ({ children }: RightPanelProps) {
  return <div className='right-panel'> {children} </div>
}
