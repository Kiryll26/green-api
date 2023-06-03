export interface Colors {
    mainBg: string
    txtColor: string
    green: string
    red: string
    dark: string
}

export interface BaseTheme {
    colors: Colors
    layout: {
        aside: {
            width: string
        }
    }
}

export const baseTheme: BaseTheme = {
    colors: {
        red: '#fb0b12',
        mainBg: '#111B21',
        dark: '#090f13',
        txtColor: '#E9EDDD',
        green: '#005550',
    },

    layout: {
        aside: {
            width: '300px',
        },
    },
}
