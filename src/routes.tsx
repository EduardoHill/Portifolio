import { createBrowserRouter } from 'react-router-dom'
import { App } from './app'
import { About } from './Pages/About/About'
import { Project } from './Pages/Projects'
import { Bio } from './Pages/About/bio'
import { Interests } from './Pages/About/interests'

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
    path: '/sobre/bio',
    element: <Bio />,
  },
  {
    path: '/sobre/interests',
    element: <Interests />,
  },
  {
    path: '/projetos',
    element: <Project />,
  },
])
