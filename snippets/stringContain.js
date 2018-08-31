// https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/01.02.md
// if string a contains string b
function stringContain(a, b) {
    for (let i = 0; i < a.length; i++) {
        let j, k = i;
        for (j = 0; j < b.length && a[k] === b[j]; j++, k++) {
            
        }
        if (j >= b.length) {
            return true
        }
    }
    return false;
}

// 速度最快, 只能搜索单个字符
function binStringContain(a, b)
{
    let hash = 0;
    for (let i = 0; i < a.length; ++i)
    {
        // hash | ‘A' -> 0b0001, hash | 'B' -> 0b0011
        hash |= (1 << (a[i].charCodeAt(0) - 'A'.charCodeAt(0)));
    }
    for (let i = 0; i < b.length; ++i)
    {   
        // hash & 'A' -> 0b0011 & 0b0001
        if ((hash & (1 << (b[i].charCodeAt(0) - 'A'.charCodeAt(0)))) === 0)
        {
            return false;
        }
    }
    return true;
}