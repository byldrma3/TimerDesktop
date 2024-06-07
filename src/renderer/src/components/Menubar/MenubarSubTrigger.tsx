import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { cn } from '@core/utils'

const MenubarSubTrigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
        inset?: boolean
    }
>(({ className, inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
        ref={ref}
        className={cn(
            'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
            inset && 'pl-8',
            className,
        )}
        {...props}>
        {children}
        <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

export default MenubarSubTrigger
