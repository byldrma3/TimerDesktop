export interface TimerDisplayProps {
    seconds: number
    isRunning: boolean
    isPaused: boolean
    startTimer: () => void
    resumeTimer: () => void
    stopTimer: () => void
    resetTimer: () => void
}
