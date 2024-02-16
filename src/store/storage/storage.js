
export function storeAuthState(auth) {
    localStorage.setItem("auth", JSON.stringify(auth));
}

export function loadAuthState() {
    const defaultState = { id: 0 };
    const authStateInStorage = localStorage.getItem("auth");
    if (!authStateInStorage) return defaultState;
    try {
        return JSON.parse(authStateInStorage);
    } catch {
        return defaultState;
    }
}


//////////////////////////////////////////

export function storeToken(token) {

    if (token) {

        localStorage.setItem('token', (token))
    } else {
        localStorage.removeItem('token');
    }
}



export function loadToken() {
    const tokenInString = localStorage.getItem('token');
    if (!tokenInString) return null;

    try {

        return JSON.parse(tokenInString)
    } catch {
        return null;
    }
}
export function storeRentalState(rental) {
    localStorage.setItem("rental", JSON.stringify(rental));
}

export function loadRentalState() {
    const defaultState = { startDate: "", endDate: "" };
    const rentalStateInStorage = localStorage.getItem("rental");
    if (!rentalStateInStorage) return defaultState;
    try {
        return JSON.parse(rentalStateInStorage);
    } catch {
        return defaultState;
    }
}