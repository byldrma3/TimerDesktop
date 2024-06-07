const setTheme = () => {
    const font = localStorage.getItem('settings.font')

    if (!font) return

    document.body.style.fontFamily = font
}

export default {
    setTheme: setTheme,
}
