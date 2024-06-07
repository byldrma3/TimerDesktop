import * as React from 'react'
import { Button } from '@components'
import { TimerSelectHours, TimerSelectMinutes, TimerSelectSeconds } from '@ui'
import type { TimerSetupProps } from './TimerSetup.types'

const TimerSetup: React.FC<TimerSetupProps> = ({
    selectTime,
    setSelectTime,
    isRunning,
    startTimer,
}) => {
    if (isRunning) return null

    return (
        <React.Fragment>
            <div className="flex gap-2">
                <TimerSelectHours
                    selectTime={selectTime}
                    setSelectTime={setSelectTime}
                />
                <TimerSelectMinutes
                    selectTime={selectTime}
                    setSelectTime={setSelectTime}
                />
                <TimerSelectSeconds
                    selectTime={selectTime}
                    setSelectTime={setSelectTime}
                />
            </div>

            <div className="flex gap-2">
                <Button variant="outline" disabled={!isRunning}>
                    Cancel
                </Button>
                <Button onClick={startTimer} disabled={isRunning}>
                    Start
                </Button>
            </div>
        </React.Fragment>
    )
}
export default TimerSetup
