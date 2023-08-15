import { AppRouter } from './routers'
import './styles/variables.css'
import './styles/reset.css'
import { Provider } from 'react-redux'
import { store } from '../entities/store/store'

export function App () {
  return <Provider store={store}>
    <AppRouter/>
  </Provider>
}
