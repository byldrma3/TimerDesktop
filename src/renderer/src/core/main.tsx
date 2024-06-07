import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeMiddlewares } from '@core/middlewares'
import { ThemeProvider, VolumeProvider } from '@core/context'
import App from './App'

import './assets/main.css'

ThemeMiddlewares.setTheme()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider storageKey="settings.theme">
            <VolumeProvider>
                <App />
            </VolumeProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
