// {
function *gener() {
    console.log(1);
    const nex = yield new Promise(r => setTimeout(r, 100));
    yield nex + 5;
    console.log(nex);
}
//     console.log(gener())
// }
