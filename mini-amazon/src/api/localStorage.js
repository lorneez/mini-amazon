
export function setAuthentication(auth) {
    window.localStorage.setItem("zestToken", auth.token);
    window.localStorage.setItem("zestDate", auth.expireDate);
    window.localStorage.setItem("zestUsername", auth.username);
    window.localStorage.setItem("zestUserType", auth.userType);
    window.localStorage.setItem("zestUserId", auth.userId);
}

export function getAuthentication() {
    const token = window.localStorage.getItem("zestToken");
    const expireDate = window.localStorage.getItem("zestDate");
    const username = window.localStorage.getItem("zestUsername");
    const userType = window.localStorage.getItem("zestUserType");
    const userId = window.localStorage.getItem("zestUserId");
    if(token != null && expireDate != null && username != null && userType != null && userId != null) {
        return {
            isSignedIn: true,
            username: username,
            userType: userType,
            userId: userId,
            token: token,
            expireDate: expireDate
        };
    }
    return null;
}

export function clearAuthentication() {
    window.localStorage.removeItem("zestToken");
    window.localStorage.removeItem("zestDate");
    window.localStorage.removeItem("zestUsername");
    window.localStorage.removeItem("zestUserType");
    window.localStorage.removeItem("zestUserId");
}

export function validateAuthentication() {
    const expireDate = window.localStorage.getItem("zestDate");
    const now = Math.floor(new Date().getTime() / 1000);
    return now < expireDate;
}