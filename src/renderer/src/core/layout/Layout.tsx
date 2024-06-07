import * as React from 'react'
import { BrowserWindow } from '@components'
import { LayoutProps } from './Layout.types'
import { cn } from '@core/utils'

const Layout: React.FC<LayoutProps> = ({ className, children, ...props }) => {
    return (
        <main>
            <BrowserWindow />
            <section
                className={cn(
                    'min-h-[calc(100vh-32px)] bg-background',
                    className,
                )}
                {...props}>
                {children}
            </section>
        </main>
    )
}
export default Layout
