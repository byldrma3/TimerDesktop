import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { cn } from '@core/utils'

import type { MenubarStaticProperties } from './Menubar.types'

import MenubarCheckboxItem from './MenubarCheckboxItem'
import MenubarContent from './MenubarContent'
import MenubarItem from './MenubarItem'
import MenubarLabel from './MenubarLabel'
import MenubarRadioItem from './MenubarRadioItem'
import MenubarSeparator from './MenubarSeparator'
import MenubarShortcut from './MenubarShortcut'
import MenubarSubContent from './MenubarSubContent'
import MenubarSubTrigger from './MenubarSubTrigger'
import MenubarTrigger from './MenubarTrigger'

export const MenubarMenu = MenubarPrimitive.Menu
export const MenubarGroup = MenubarPrimitive.Group
export const MenubarPortal = MenubarPrimitive.Portal
export const MenubarSub = MenubarPrimitive.Sub
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Root
        ref={ref}
        className={cn('flex h-8 items-center space-x-1 rounded-md', className)}
        {...props}
    />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

type MenubarComponent = typeof Menubar & MenubarStaticProperties

const MenubarWithStaticProperties = Menubar as MenubarComponent

MenubarWithStaticProperties.Menu = MenubarMenu
MenubarWithStaticProperties.Group = MenubarGroup
MenubarWithStaticProperties.Portal = MenubarPortal
MenubarWithStaticProperties.Sub = MenubarSub
MenubarWithStaticProperties.RadioGroup = MenubarRadioGroup
MenubarWithStaticProperties.CheckboxItem = MenubarCheckboxItem
MenubarWithStaticProperties.Content = MenubarContent
MenubarWithStaticProperties.Item = MenubarItem
MenubarWithStaticProperties.Label = MenubarLabel
MenubarWithStaticProperties.RadioItem = MenubarRadioItem
MenubarWithStaticProperties.Separator = MenubarSeparator
MenubarWithStaticProperties.Shortcut = MenubarShortcut
MenubarWithStaticProperties.SubContent = MenubarSubContent
MenubarWithStaticProperties.SubTrigger = MenubarSubTrigger
MenubarWithStaticProperties.Trigger = MenubarTrigger

export default MenubarWithStaticProperties
