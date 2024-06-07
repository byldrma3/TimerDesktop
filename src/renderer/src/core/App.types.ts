export type TimerAction =
    | { type: 'SET_SECONDS'; payload: number }
    | { type: 'SET_SELECT_TIME'; payload: SelectTimeProps }
    | { type: 'START_TIMER' }
    | { type: 'STOP_TIMER' }
    | { type: 'PAUSE_TIMER' }
    | { type: 'RESUME_TIMER' }
    | { type: 'RESET_TIMER' }
    | { type: 'DECREMENT_SECONDS' }

export interface SelectTimeProps {
    hours: number
    minutes: number
    seconds: number
}

export interface TimerState {
    seconds: number
    selectTime: SelectTimeProps
    isRunning: boolean
    isPaused: boolean
}
