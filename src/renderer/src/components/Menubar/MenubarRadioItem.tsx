import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { cn } from '@core/utils'

const MenubarRadioItem = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            className,
        )}
        {...props}>
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <DotFilledIcon className="h-4 w-4 fill-current" />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

export default MenubarRadioItem
