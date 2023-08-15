import { LeftPanel, RightPanel, TopPanel, Workspace } from 'shared'
import { DrawCanvas, InstrumentsPanel, Navbar, ToolSettingsPanel } from '../../../widgets'

export function DrawPage () {
  return <div>
        <TopPanel>
            <Navbar/>
            <ToolSettingsPanel/>
        </TopPanel>
        <LeftPanel>
            <InstrumentsPanel/>
        </LeftPanel>
        <RightPanel>Right Panel</RightPanel>
        <Workspace>
            <DrawCanvas/>
        </Workspace>
    </div>
}
