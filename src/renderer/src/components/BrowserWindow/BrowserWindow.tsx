import * as React from 'react'
import { Menubar, Slider } from '@components'
import { MoonIcon, SunIcon, DesktopIcon } from '@radix-ui/react-icons'
import { useTheme, useVolume } from '@core/context'
import { useHotkeys } from 'react-hotkeys-hook'

const BrowserWindow: React.FC = () => {
    const { setTheme } = useTheme()

    useHotkeys('mod+l', () => setTheme('light'))
    useHotkeys('mod+d', () => setTheme('dark'))
    useHotkeys('mod+s', () => setTheme('system'))

    const { volume, handleAudioVolume } = useVolume()

    const setAudioVolume = React.useCallback((value: number[]) => {
        return handleAudioVolume(value[0])
    }, [])

    const setChangeFont = React.useCallback(
        (font: 'Space Grotesk' | 'Jet Brains') => {
            document.body.style.fontFamily = font

            localStorage.setItem('settings.font', font)
        },
        [],
    )

    React.useEffect(() => {
        handleAudioVolume(volume)
    }, [])

    return (
        <header className="browse-window sticky top-0 z-50 flex h-8 border-b border-accent bg-background px-20">
            <Menubar className="browse-window-menu">
                <Menubar.Menu>
                    <Menubar.Trigger>Settings</Menubar.Trigger>
                    <Menubar.Content>
                        <Menubar.Sub>
                            <Menubar.SubTrigger>Color Theme</Menubar.SubTrigger>
                            <Menubar.SubContent>
                                <Menubar.Item onClick={() => setTheme('light')}>
                                    <SunIcon className="mr-2" />
                                    Light
                                    <Menubar.Shortcut>⌘L</Menubar.Shortcut>
                                </Menubar.Item>
                                <Menubar.Item onClick={() => setTheme('dark')}>
                                    <MoonIcon className="mr-2" />
                                    Dark
                                    <Menubar.Shortcut>⌘D</Menubar.Shortcut>
                                </Menubar.Item>
                                <Menubar.Item
                                    onClick={() => setTheme('system')}>
                                    <DesktopIcon className="mr-2" />
                                    System
                                    <Menubar.Shortcut>⌘S</Menubar.Shortcut>
                                </Menubar.Item>
                            </Menubar.SubContent>
                        </Menubar.Sub>
                        <Menubar.Sub>
                            <Menubar.SubTrigger>Fonts</Menubar.SubTrigger>
                            <Menubar.SubContent>
                                <Menubar.Item
                                    onClick={() =>
                                        setChangeFont('Space Grotesk')
                                    }>
                                    Space Grotesk
                                </Menubar.Item>
                                <Menubar.Item
                                    onClick={() => setChangeFont('Jet Brains')}>
                                    Jet Brains Mono
                                </Menubar.Item>
                            </Menubar.SubContent>
                        </Menubar.Sub>
                        <Menubar.Separator />
                        <Menubar.Sub>
                            <Menubar.SubTrigger>
                                Sound Volume
                            </Menubar.SubTrigger>
                            <Menubar.SubContent>
                                <div className="px-2 py-3">
                                    <Slider
                                        defaultValue={[volume]}
                                        max={100}
                                        step={1}
                                        onValueChange={setAudioVolume}
                                    />
                                </div>
                            </Menubar.SubContent>
                        </Menubar.Sub>
                    </Menubar.Content>
                </Menubar.Menu>
            </Menubar>

            <strong className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-foreground">
                Timer
            </strong>
        </header>
    )
}
export default BrowserWindow
