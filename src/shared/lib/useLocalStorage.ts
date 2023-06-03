export const setLocalStorageUser = (user: string) => {
    localStorage.setItem('user', user)
}

export const getLocalStorageUser = () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

export const removeLocalStorageUser = () => {
    localStorage.removeItem('user')
}
