// https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/01.03.md
function strToInt(str) {
    let n = 0;
    for (let i = 0; i < str.length; i++) {
        n *= 10;
        n += Number(str[i]);
    }
    return n;
}