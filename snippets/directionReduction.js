// https://www.codewars.com/kata/directions-reduction/train/javascript
function dirReduc(arr){
  if (!arr.length || arr.length === 1) return arr
  const reducible1 = ['NORTH', 'SOUTH'], reducible2 = ['EAST', 'WEST']
  return arr.slice(1).reduce((prev, next, index, arr) => {
    let compared = [prev[prev.length - 1], next].sort()
    if ((compared[0] === reducible1[0] && compared[1] === reducible1[1]) || (compared[0] === reducible2[0] && compared[1] === reducible2[1])) {
      return prev.slice(0, prev.length - 1)
    }
    return prev.concat(next)
  }, [arr[0]])
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

// good answers
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
