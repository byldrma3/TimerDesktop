import type { SelectTimeProps } from '@core/App.types'

export interface TimerSetupProps {
    selectTime: SelectTimeProps
    setSelectTime: (time: SelectTimeProps) => void
    isRunning: boolean
    startTimer: () => void
}
