import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  className?: string
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div
      className={[
        'mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}

export default Layout