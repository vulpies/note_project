const TOKEN_KEY = "jwt-token"
const REFRESH_KEY = "jwt-refresh-token"
const EXPIRES_KEY = "jwt-expires"
const USER_ID = "user-local-id"
const USER_ROLE = "role"

export function setTokens(
    { accessToken, refreshToken, expiresIn = 1000 },
    userId,
    role
) {
    const expiresDate = new Date().getTime() + expiresIn * 1000
    localStorage.setItem(TOKEN_KEY, accessToken)
    localStorage.setItem(REFRESH_KEY, refreshToken)
    localStorage.setItem(EXPIRES_KEY, expiresDate)
    localStorage.setItem(USER_ID, userId)
    localStorage.setItem(USER_ROLE, role)
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function getUserRole() {
    return localStorage.getItem(USER_ROLE)
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY)
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY)
}

export function removeAuthData() {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(REFRESH_KEY)
    localStorage.removeItem(EXPIRES_KEY)
    localStorage.removeItem(USER_ID)
    localStorage.removeItem(USER_ROLE)
}

const localStorageService = {
    setTokens,
    removeAuthData,
    getUserRole,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
}
export default localStorageService
