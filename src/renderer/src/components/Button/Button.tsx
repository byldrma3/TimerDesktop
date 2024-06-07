import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { buttonVariants } from './Button.styles'
import { cn } from '@core/utils'
import type { ButtonProps } from './Button.types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    },
)
Button.displayName = 'Button'

export default Button
