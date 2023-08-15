import { type ReactNode } from 'react'
import '../styles/WorkSpace.css'

export interface WorkSpaceProps {
  children?: ReactNode
}

export function Workspace ({ children }: WorkSpaceProps) {
  return <div className='workspace'>{children}</div>
}
