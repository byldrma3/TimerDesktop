import { SelectTimeProps } from '@core/App.types'

const getWaveHeight = (selectTime: SelectTimeProps, seconds: number) => {
    const totalTime =
        selectTime.hours * 3600 + selectTime.minutes * 60 + selectTime.seconds
    return totalTime > 0 ? `${(seconds / totalTime) * 100}%` : '0%'
}

export default getWaveHeight
