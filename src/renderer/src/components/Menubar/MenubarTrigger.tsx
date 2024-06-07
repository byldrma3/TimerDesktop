import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { cn } from '@core/utils'

const MenubarTrigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger
        ref={ref}
        className={cn(
            'flex cursor-default select-none items-center rounded-sm bg-input px-3 py-0.5 text-xs font-medium text-accent-foreground outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
            className,
        )}
        {...props}
    />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

export default MenubarTrigger
