import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { cn } from '@core/utils'

const MenubarLabel = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Label
        ref={ref}
        className={cn(
            'px-2 py-1.5 text-sm font-semibold',
            inset && 'pl-8',
            className,
        )}
        {...props}
    />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

export default MenubarLabel
