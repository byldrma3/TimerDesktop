import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { cn } from '@core/utils'

const MenubarItem = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Item
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            inset && 'pl-8',
            className,
        )}
        {...props}
    />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

export default MenubarItem
