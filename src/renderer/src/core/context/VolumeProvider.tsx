import * as React from 'react'

interface VolumeContextProps {
    volume: number
    handleAudioVolume: (value: number) => void
}

const initialState: VolumeContextProps = {
    volume: 100,
    handleAudioVolume: () => null,
}

const VolumeContext = React.createContext<VolumeContextProps>(initialState)

interface VolumeProviderProps {
    children: React.ReactNode
}

const VOLUME_STORAGE_KEY = 'volume'

export const VolumeProvider: React.FC<VolumeProviderProps> = ({ children }) => {
    const [volume, setVolume] = React.useState<number>(() => {
        const savedVolume = localStorage.getItem(VOLUME_STORAGE_KEY)
        return savedVolume ? parseFloat(savedVolume) : 100
    })

    const handleAudioVolume = React.useCallback((value: number) => {
        localStorage.setItem(VOLUME_STORAGE_KEY, JSON.stringify(value))
        setVolume(value)
    }, [])

    return (
        <VolumeContext.Provider value={{ volume, handleAudioVolume }}>
            {children}
        </VolumeContext.Provider>
    )
}

export const useVolume = () => {
    return React.useContext(VolumeContext)
}
