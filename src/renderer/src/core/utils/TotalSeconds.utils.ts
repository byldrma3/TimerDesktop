import { SelectTimeProps } from '@core/App.types'

const getTotalSeconds = (selectTime: SelectTimeProps): number => {
    return (
        selectTime.hours * 3600 + selectTime.minutes * 60 + selectTime.seconds
    )
}

export default getTotalSeconds
