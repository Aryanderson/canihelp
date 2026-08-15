import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  className?: string
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div
      className={[
        'mx-auto w-full lg:w-[1000px]  max-w-[7xl] px-4 sm:px-6 lg:px-8',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}

export default Layout
