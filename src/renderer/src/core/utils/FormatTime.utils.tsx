import { padStart, toString } from 'lodash'

const getFormatTime = (seconds: number) => {
    const hours = padStart(toString(Math.floor(seconds / 3600)), 2, '0')
    const minutes = padStart(
        toString(Math.floor((seconds % 3600) / 60)),
        2,
        '0',
    )
    const secs = padStart(toString(seconds % 60), 2, '0')

    return `${hours}:${minutes}:${secs}`
}

export default getFormatTime
