// https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript

function isMerge(s, part1, part2) {
  if (part1.length + part2.length !== s.lengh) return false
  function checkSequenceAndSubstr (s, subStr) {
    let subStrArr = subStr.split('')
    let lastIndex = -1
    for (let i = 0; i < subStrArr.length; i++) {
      let foundPos = s.indexOf(subStrArr[i])
      if (!~foundPos) {
          return false
      }
      if (lastIndex > foundPos) {
          return false
      }
      lastIndex = foundPos
      s = s.slice(1)
    }
    return true
  }
  return checkSequenceAndSubstr(s, part1) && checkSequenceAndSubstr(s, part2)
}

function checkSequenceAndSubstr (s, subStr) {
  let subStrArr = subStr.split('')
  let lastIndex = -1
  for (let i = 0; i < subStrArr.length; i++) {
    let foundPos = s.indexOf(subStrArr[i])
    if (!~foundPos) {
        return false
    }
    if (lastIndex > foundPos) {
        return false
    }
    lastIndex = foundPos
    s = s.slice(1)
  }
  return true
}