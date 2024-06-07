import * as React from 'react'
import { cn } from '@core/utils'

const MenubarShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                'ml-auto text-xs tracking-widest text-muted-foreground',
                className,
            )}
            {...props}
        />
    )
}
MenubarShortcut.displayname = 'MenubarShortcut'

export default MenubarShortcut
