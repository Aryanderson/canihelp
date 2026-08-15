import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import HomePage from '@/pages/home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
]

export const router = createBrowserRouter(routes)

export default router
