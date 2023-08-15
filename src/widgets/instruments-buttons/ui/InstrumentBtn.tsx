import { type ReactNode, type SyntheticEvent } from 'react'
import '../styles/InstrumentBtn.css'

interface InstrumentBtnProps {
  children: ReactNode
  onClick: (e: SyntheticEvent) => void
}

export const InstrumentBtn = ({ children, onClick }: InstrumentBtnProps) => {
  return <div className="instrument-btn" onClick={onClick}>
    {children}
  </div>
}
