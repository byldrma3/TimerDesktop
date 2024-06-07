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
import {
    MenubarGroup,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarSub,
} from './Menubar'

export interface MenubarStaticProperties {
    Menu: typeof MenubarMenu
    Group: typeof MenubarGroup
    Portal: typeof MenubarPortal
    Sub: typeof MenubarSub
    RadioGroup: typeof MenubarRadioGroup
    CheckboxItem: typeof MenubarCheckboxItem
    Content: typeof MenubarContent
    Item: typeof MenubarItem
    Label: typeof MenubarLabel
    RadioItem: typeof MenubarRadioItem
    Separator: typeof MenubarSeparator
    Shortcut: typeof MenubarShortcut
    SubContent: typeof MenubarSubContent
    SubTrigger: typeof MenubarSubTrigger
    Trigger: typeof MenubarTrigger
}
