import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          'flex h-12 w-full rounded-md border border-input bg-amber-50 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-amber-50 placeholder:text-muted-foreground file:inline-flex file:h-7 file:border-0 file:bg-amber-50 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export { Input }
