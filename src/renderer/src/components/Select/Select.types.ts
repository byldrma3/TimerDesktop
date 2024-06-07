import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { SelectGroup, SelectValue } from './Select'
import SelectContent from './SelectContent'
import SelectItem from './SelectItem'
import SelectLabel from './SelectLabel'
import SelectSeparator from './SelectSeparator'
import SelectTrigger from './SelectTrigger'

export interface SelectStaticProperties {
    Group: typeof SelectGroup
    Value: typeof SelectValue
    Content: typeof SelectContent
    Item: typeof SelectItem
    Label: typeof SelectLabel
    Separator: typeof SelectSeparator
    Trigger: typeof SelectTrigger
}

export interface SelectProps
    extends React.ComponentProps<typeof SelectPrimitive.Root> {}
