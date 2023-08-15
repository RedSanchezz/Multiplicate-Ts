import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DrawPage } from '../../../pages'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <DrawPage/>
  }
])

export function AppRouter () {
  return <RouterProvider router={appRouter} />
}
