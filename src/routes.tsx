import { createBrowserRouter } from 'react-router-dom'
import { App } from './app'
import { About } from './Pages/About'
import { Project } from './Pages/Projects'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sobre',
    element: <About />,
  },
  {
    path: '/projetos',
    element: <Project />,
  },
])
