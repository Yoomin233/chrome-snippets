function add(num1, num2) {
    let res = [];
    let i1 = num1.length - 1
      , i2 = num2.length - 1;
    let plus = 0;
    while (i1 >= 0 && i2 >= 0) {
        let added = Number(num1[i1--]) + Number(num2[i2--]);
        if (plus) {
            added += plus--;
//             plus = 0;
        }
        if (added > 9) {
            //             res.unshift(added % 10);
            plus = 1;
        }
        res.unshift(added % 10);
    }
    if (num1[i1] !== undefined) {
        res.unshift(Number(num1.slice(0, i1 + 1)) + (plus ? plus : 0));
        plus = 0;
    } else if (num2[i2] !== undefined) {
        res.unshift(Number(num2.slice(0, i2 + 1)) + (plus ? plus : 0));
        plus = 0;
    } else if (plus) {
        res.unshift(plus);
    }
    //     if (plus) res.unshift(1);\
    return res.join('');
}
