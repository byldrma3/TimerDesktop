const hours: number[] = Array.from({ length: 24 }, (_, i) => i)

const minutesAndSeconds: number[] = Array.from({ length: 60 }, (_, i) => i)

export default {
    hours: hours,
    minutes: minutesAndSeconds,
    seconds: minutesAndSeconds,
}
