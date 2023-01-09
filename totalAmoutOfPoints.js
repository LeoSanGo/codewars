/* 
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/

function points(games) {
  let total = 0
  for (let i = 0; i < games.length; i++) {
    const game = games[i]
    const x = game[0]
    const y = game[2]
    if (x > y) {
      total += 3
    } else if (x === y) {
      total += 1
    }
  }
  return total
}

/* 
Other solutions

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

  -------------------------
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)

-------------------------
function points(games) {
  return games.reduce((current, element) => {
    let arraySplit = element.split(':');
    return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
  }, 0);
}

-------------------------
const points = a => a.reduce((r, e) => {
  const x = e[0];
  const y = e[2];
  return r + (x > y ? 3 : x < y ? 0 : 1);
}, 0);

-------------------------
points=g=>g.reduce((a,c)=>a+(c[0]>c[2]?3:c[0]<c[2]?0:1),0)

*/