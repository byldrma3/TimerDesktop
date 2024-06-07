import * as React from 'react'
import { Select, Label } from '@components'
import { TimerConstants } from '@core/utils'
import { map, toString } from 'lodash'
import { TimerSelectProps } from './TimerSelect.types'

const TimerSelectHours: React.FC<TimerSelectProps> = ({
    selectTime,
    setSelectTime,
}) => {
    return (
        <div className="flex flex-col gap-1.5">
            <Label>Hours</Label>
            <Select
                defaultValue="0"
                value={toString(selectTime.hours)}
                onValueChange={value =>
                    setSelectTime({ ...selectTime, hours: parseInt(value) })
                }>
                <Select.Trigger className="w-[100px]">
                    <Select.Value placeholder="Hours" />
                </Select.Trigger>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Hours</Select.Label>
                        {map(TimerConstants.hours, hour => (
                            <Select.Item key={hour} value={toString(hour)}>
                                {toString(hour)}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select>
        </div>
    )
}
export default TimerSelectHours
