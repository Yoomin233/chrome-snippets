function isPalinedrome(str) {
    if (str.length === 1 || !str) {
        return true
    } else if (str[0] === str[str.length - 1]) {
        return isPalinedrome(str.slice(1, str.length - 1));
    }
    return false;
}