import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { cn } from '@core/utils'

const MenubarSeparator = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Separator
        ref={ref}
        className={cn('-mx-1 my-1 h-px bg-muted', className)}
        {...props}
    />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

export default MenubarSeparator
