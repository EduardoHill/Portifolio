import { createBrowserRouter } from 'react-router-dom'
import { App } from './app'
import { About } from './Pages/Education/Page'
import { Bio } from './Pages/Bio/Page'
import { Interests } from './Pages/Interests/Page'
import { Project } from './Pages/Page'

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
