/// <reference types="vite/client" />
declare global {
    interface Window {
        electron: {
            platform: {
                isMac: boolean
                isWindows: boolean
            }
        }
    }
}

export {}
