function isLoggedinAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUSBSCRIBED')
}

console.log(isLoggedinAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));