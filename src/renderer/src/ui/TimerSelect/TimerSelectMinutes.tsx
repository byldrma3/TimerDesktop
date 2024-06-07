import * as React from 'react'
import { Select, Label } from '@components'
import { TimerConstants } from '@core/utils'
import { map, toString } from 'lodash'
import { TimerSelectProps } from './TimerSelect.types'

const TimerSelectMinutes: React.FC<TimerSelectProps> = ({
    selectTime,
    setSelectTime,
}) => {
    return (
        <div className="flex flex-col gap-1.5">
            <Label>Minutes</Label>
            <Select
                defaultValue="3"
                value={toString(selectTime.minutes)}
                onValueChange={value =>
                    setSelectTime({ ...selectTime, minutes: parseInt(value) })
                }>
                <Select.Trigger className="w-[100px]">
                    <Select.Value placeholder="Minutes" />
                </Select.Trigger>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Minutes</Select.Label>
                        {map(TimerConstants.minutes, minute => (
                            <Select.Item key={minute} value={toString(minute)}>
                                {toString(minute)}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select>
        </div>
    )
}
export default TimerSelectMinutes
