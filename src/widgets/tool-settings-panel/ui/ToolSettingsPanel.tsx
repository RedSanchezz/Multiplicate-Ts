import '../styles/ToolSettingsPanel.css'
import { InputRangeControl } from "../../../shared"
import { useAppDispatch, useAppSelector } from "../../../entities/store/Hooks"
import { changeAlpha, changeSize } from "../../../entities/model/brushSlice"

export const ToolSettingsPanel = () => {
  const size = useAppSelector((state) => state.brush.size)
  const alpha = useAppSelector((state) => state.brush.alpha)

  const dispatch = useAppDispatch()

  return <div className='tool-settings-panel'>
        <InputRangeControl title="Размер линии" step={1} range={[0, 250]} value={size} setValue={(size) => {
          dispatch(changeSize(size))
        }}/>
        <InputRangeControl title='Прозрачность' step={0.01} range={[0, 1]} value={alpha} setValue={(alpha) => {
          dispatch(changeAlpha(alpha))
        }}/>

    </div>
}
