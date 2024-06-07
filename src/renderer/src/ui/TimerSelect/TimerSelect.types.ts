import { SelectTimeProps } from '@core/App.types'

export interface TimerSelectProps {
    selectTime: SelectTimeProps
    setSelectTime: (time: SelectTimeProps) => void
}
