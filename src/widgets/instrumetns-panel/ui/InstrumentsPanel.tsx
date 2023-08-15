import '../styles/InstrumentsPanel.css'
import { BrushBtn, EracerBtn } from '../../instruments-buttons'
export const InstrumentsPanel = () => {
  return <div className="instruments-panel">
    <BrushBtn/>
    <EracerBtn/>
    <BrushBtn/>
    <EracerBtn/>
    <BrushBtn/>
    <EracerBtn/>
  </div>
}
