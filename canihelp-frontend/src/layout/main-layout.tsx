import { Outlet, useLocation } from "react-router-dom"
import Layout from './layout'

function MainLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="w-full flex-1">
        <Layout>
          <Outlet />
        </Layout>
      </main>
    </div>
  )
}

export default MainLayout;