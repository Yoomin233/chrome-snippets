{
    let wallsArr = [];
    let vicPointsArr = [];
    let crates = [];
    [0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 4, 2, 4, 1, 3, 0, 0, 0, 0, 3, 1, 2, 4, 2, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0].forEach((type, index) => {
        const currentPos = [Math.floor(index / 12), index % 12]
//         console.log(currentPos);
        if (type === 1) vicPointsArr.push(currentPos);
        if (type === 3) wallsArr.push(currentPos);
        if (type === 4) crates.push(currentPos);
    })
    let wallsArrStr = wallsArr.toString().replace(/(\d,\d)/g, '[$1]');
    let vicPointsArrStr = vicPointsArr.toString().replace(/(\d,\d)/g, '[$1]');
    let cratesStr = crates.toString().replace(/(\d,\d)/g, '[$1]')
    console.log(wallsArrStr, vicPointsArrStr, cratesStr);
}