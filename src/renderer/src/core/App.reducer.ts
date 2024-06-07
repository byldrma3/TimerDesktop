import type { TimerAction, TimerState } from './App.types'

export const initialState: TimerState = {
    seconds: 0,
    selectTime: {
        hours: 0,
        minutes: 3,
        seconds: 0,
    },
    isRunning: false,
    isPaused: false,
}

export const timerReducer = (
    state: TimerState,
    action: TimerAction,
): TimerState => {
    switch (action.type) {
        case 'SET_SECONDS':
            return { ...state, seconds: action.payload }
        case 'SET_SELECT_TIME':
            return { ...state, selectTime: action.payload }
        case 'START_TIMER':
            return { ...state, isRunning: true, isPaused: false }
        case 'STOP_TIMER':
            return { ...state, isPaused: true }
        case 'RESUME_TIMER':
            return { ...state, isPaused: false }
        case 'RESET_TIMER':
            return { ...state, isRunning: false, isPaused: false, seconds: 0 }
        case 'DECREMENT_SECONDS':
            return { ...state, seconds: Math.max(0, state.seconds - 1) }
        default:
            return state
    }
}
