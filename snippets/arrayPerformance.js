var arr = Array.from({length: 100}, item => Math.floor(Math.random() * 100));
{
    console.time('forLoop');
    let arrLen = arr.length;
    let sum = 0;
    for (let i = 0; i < arrLen; i++) {
        sum += arr[i];
    }
    console.timeEnd('forLoop');
    console.log(sum);
}
{
    console.time('reduce');
    let arrLen = arr.length;
    let sum = 0;
    arr.reduce((prev, next) => {
       sum += prev;
       return next; 
    });
    console.timeEnd('reduce');
    console.log(sum + arr[arrLen - 1]);
}