import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import type { SelectProps, SelectStaticProperties } from './Select.types'
import SelectContent from './SelectContent'
import SelectItem from './SelectItem'
import SelectLabel from './SelectLabel'
import SelectSeparator from './SelectSeparator'
import SelectTrigger from './SelectTrigger'

const Select: React.FC<SelectProps> & SelectStaticProperties = props => (
    <SelectPrimitive.Root {...props} />
)

export const SelectGroup = SelectPrimitive.Group

export const SelectValue = SelectPrimitive.Value

Select.Group = SelectGroup
Select.Value = SelectValue
Select.Content = SelectContent
Select.Item = SelectItem
Select.Label = SelectLabel
Select.Separator = SelectSeparator
Select.Trigger = SelectTrigger

export default Select
