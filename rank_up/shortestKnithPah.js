/* Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.

The knight is not allowed to move off the board. The board is 8x8.

For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29

(Warning: many of the tests were generated randomly. If any do not work, the test cases will return the input, output, and expected output; please post them.)

 */
function knight(start, end) {
    if (start === end) {
        return 0;
    }

    const index = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const start_x = index(start[0]);
    const start_y = parseInt(start[1], 10);
    const end_x = index(end[0]);
    const end_y = parseInt(end[1], 10);

    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    let queue = [[start_x, start_y, 0]]; 
    let visited = new Set(`${start_x},${start_y}`);

    while (queue.length > 0) {
        let [current_x, current_y, current_moves] = queue.shift();

        for (let [dx, dy] of moves) {
            let x = current_x + dx;
            let y = current_y + dy;

            if (x >= 1 && x <= 8 && y >= 1 && y <= 8) { 
                if (x === end_x && y === end_y) {
                    return current_moves + 1;
                }
                let posKey = `${x},${y}`;
                if (!visited.has(posKey)) {
                    visited.add(posKey);
                    queue.push([x, y, current_moves + 1]);
                }
            }
        }
    }

    return -1; 
}

/* 
Object.defineProperty( Set.prototype, "reduce", { value: function reduce(fn,z) { for ( const v of this ) z = fn(z,v); return z; } } );
function knight(start,finish) {
  const fromXY = (x,y) => " abcdefgh"[x] + String(y) ;
  const toXY = ([x,y]) => [ " abcdefgh".indexOf(x), Number(y) ] ;
  const onBoard = ([x,y]) => x>=1 && x<=8 && y>=1 && y<=8 ;
  const moves = (x,y) => [ [x+1,y-2], [x+1,y+2], [x+2,y-1], [x+2,y+1], [x-1,y-2], [x-1,y+2], [x-2,y-1], [x-2,y+1] ].filter(onBoard) ;
  const allMoves = positions => positions.reduce( (set,pos) => moves(...toXY(pos)).reduce( (set,[x,y]) => set.add(fromXY(x,y)) , set ) , new Set ) ;
  return function move(positions,m) { return positions.has(finish) ? m : move( allMoves(positions), m+1 ) ; } ( new Set([start]), 0 ) ;
}
--------------------

function knight(start, finish) {
    let map = [0,3,2,3,2,3,4,5, //based on google image search "knight move distance from corner"
        3,2,1,2,3,4,3,4,
        2,1,4,3,2,3,4,5,
        3,2,3,2,3,4,3,4,
        2,3,2,3,4,3,4,5,
        3,4,3,4,3,4,5,4,
        4,3,4,3,4,5,4,5,
        5,4,5,4,5,4,5,6];
    let diff = Math.abs(finish.charCodeAt(0) - start.charCodeAt(0)) * 8 + Math.abs(finish.charCodeAt(1) - start.charCodeAt(1));

    if(diff === 9 && (parseInt(start[1]) === 1 || parseInt(start[1]) === 8)&&
        (start[0] === 'a' || start[0] === 'h')) return 4; // corner case 1
    if(diff === 9 && (parseInt(finish[1]) === 1 || parseInt(finish[1]) === 8) &&
        (finish[0] === 'a' || finish[0] === 'h')) return 4; // corner case 2

    return map[diff];
}
-----------


*/