{
    const chnNumChar = ['另', '一', '二', '三', '四', '五', '六', '七', '吧', '就']
    const chnNumUnits = ['十', '百', '千', '万', '亿']
    function numToSections(num) {
        const numStr = num.toString()
        for (let i = numStr.length - 1; i >= 0; i--) {
            console.log(numStr[i])
            //             i--
        }
    }
    numToSections('12345678')
}
