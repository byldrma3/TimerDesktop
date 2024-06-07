import * as React from 'react'
import { Button } from '@components'
import { getFormatTime } from '@core/utils'
import type { TimerDisplayProps } from './TimerDisplay.types'

const TimerDisplay: React.FC<TimerDisplayProps> = ({
    seconds,
    isRunning,
    isPaused,
    startTimer,
    resumeTimer,
    stopTimer,
    resetTimer,
}) => {
    if (!isRunning) return null

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <span className="text-5xl font-black text-foreground sm:text-6xl lg:text-[8rem]">
                {getFormatTime(seconds)}
            </span>
            <div className="flex gap-2">
                <Button
                    variant="outline"
                    onClick={resetTimer}
                    disabled={!isRunning}>
                    Cancel
                </Button>
                {seconds <= 0 && (
                    <Button variant={'default'} onClick={startTimer}>
                        Restart
                    </Button>
                )}

                {seconds > 0 && (
                    <Button
                        variant={isPaused ? 'default' : 'destructive'}
                        onClick={() =>
                            isPaused ? resumeTimer() : stopTimer()
                        }>
                        {isPaused ? 'Resume' : 'Pause'}
                    </Button>
                )}
            </div>
        </div>
    )
}
export default TimerDisplay
