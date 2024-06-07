import * as React from 'react'
import Wave from 'react-wavify'
import { Layout } from '@core/layout'
import { TimerSetup, TimerDisplay } from '@ui'
import { useVolume } from '@core/context'
import { getWaveHeight, getTotalSeconds } from '@core/utils'
import { timerReducer, initialState } from './App.reducer'
import NotificationSound from '@core/assets/notification.mp3'

const App = () => {
    const { volume } = useVolume()

    const [state, dispatch] = React.useReducer(timerReducer, initialState)

    const timerRef = React.useRef<NodeJS.Timeout | null>(null)
    const audioRef = React.useRef<HTMLAudioElement | null>(null)

    const startTimer = React.useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }

        handleAudioPause()

        const totalSeconds = getTotalSeconds(state.selectTime)

        dispatch({ type: 'START_TIMER' })
        dispatch({ type: 'SET_SECONDS', payload: totalSeconds })

        timerRef.current = setInterval(() => {
            dispatch({ type: 'DECREMENT_SECONDS' })
        }, 1000)
    }, [state.selectTime])

    const resumeTimer = React.useCallback(() => {
        dispatch({ type: 'RESUME_TIMER' })

        timerRef.current = setInterval(() => {
            dispatch({ type: 'DECREMENT_SECONDS' })
        }, 1000)
    }, [])

    const stopTimer = React.useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }

        dispatch({ type: 'STOP_TIMER' })
    }, [])

    const resetTimer = React.useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }

        handleAudioPause()

        dispatch({ type: 'RESET_TIMER' })
    }, [])

    const handleAudioPause = React.useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }
    }, [audioRef.current])

    React.useEffect(() => {
        if (state.seconds <= 0 && timerRef.current) {
            clearInterval(timerRef.current)
            if (state.isRunning) audioRef.current?.play()
        }
    }, [state.seconds])

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100
        }
    }, [volume])

    React.useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [])

    return (
        <Layout className="relative grid">
            <div className="z-40 flex h-full flex-col items-center justify-center gap-6">
                <TimerSetup
                    selectTime={state.selectTime}
                    setSelectTime={time =>
                        dispatch({ type: 'SET_SELECT_TIME', payload: time })
                    }
                    isRunning={state.isRunning}
                    startTimer={startTimer}
                />
                <TimerDisplay
                    seconds={state.seconds}
                    isRunning={state.isRunning}
                    isPaused={state.isPaused}
                    startTimer={startTimer}
                    resumeTimer={resumeTimer}
                    stopTimer={stopTimer}
                    resetTimer={resetTimer}
                />
            </div>

            <audio ref={audioRef}>
                <source src={NotificationSound} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <Wave
                fill="hsl(var(--indigo))"
                className="absolute bottom-0 z-0 flex w-full transition-all duration-300 animate-in slide-in-from-bottom"
                style={{
                    height: getWaveHeight(state.selectTime, state.seconds),
                }}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.35,
                    points: 3,
                }}
            />
        </Layout>
    )
}

export default App
