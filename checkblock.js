function getCookieValue(name) {
    const cookieArr = document.cookie.split(';');
    for (let cookie of cookieArr) {
        const cookiePair = cookie.trim();
        if (cookiePair.startsWith(name + '=')) {
            return cookiePair.split('=')[1];
        }
    }
    return null;
}

if (getCookieValue("blocked") !== null) {
    window.location.replace("./blocked.html");
}