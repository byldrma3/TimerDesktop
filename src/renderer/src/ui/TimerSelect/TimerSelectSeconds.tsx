import * as React from 'react'
import { Select, Label } from '@components'
import { TimerConstants } from '@core/utils'
import { map, toString } from 'lodash'
import { TimerSelectProps } from './TimerSelect.types'

const TimerSelectSeconds: React.FC<TimerSelectProps> = ({
    selectTime,
    setSelectTime,
}) => {
    return (
        <div className="flex flex-col gap-1.5">
            <Label>Seconds</Label>
            <Select
                defaultValue="0"
                value={toString(selectTime.seconds)}
                onValueChange={value =>
                    setSelectTime({ ...selectTime, seconds: parseInt(value) })
                }>
                <Select.Trigger className="w-[100px]">
                    <Select.Value placeholder="Seconds" />
                </Select.Trigger>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Seconds</Select.Label>
                        {map(TimerConstants.seconds, second => (
                            <Select.Item key={second} value={toString(second)}>
                                {toString(second)}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select>
        </div>
    )
}
export default TimerSelectSeconds
