class PuzzleNode {
    constructor(state, parent = null, g = 0, h = 0) {
        this.state = state;
        this.parent = parent;
        this.g = g; // cost from start
        this.h = h; // heuristic
        this.f = g + h; // total cost
    }
}

const goalState = [
    [2,8,1],
    [0,4,3],
    [7,6,5]
];

// Convert matrix to string
function serialize(state){
    return state.flat().join(",");
}

// Find empty tile
function findZero(state){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(state[i][j]===0) return [i,j];
        }
    }
}

// Copy matrix
function copyState(state){
    return state.map(row=>row.slice());
}

// Generate neighbors
function getNeighbors(state){
    const [x,y] = findZero(state);

    const moves = [
        [1,0],[-1,0],[0,1],[0,-1]
    ];

    let neighbors = [];

    for(let [dx,dy] of moves){
        let nx = x + dx;
        let ny = y + dy;

        if(nx>=0 && nx<3 && ny>=0 && ny<3){
            let newState = copyState(state);
            [newState[x][y], newState[nx][ny]] =
            [newState[nx][ny], newState[x][y]];
            neighbors.push(newState);
        }
    }

    return neighbors;
}

//////////////////////////////////////
// HEURISTIC 1 : Misplaced Tiles
//////////////////////////////////////

function misplacedTiles(state){
    let count = 0;

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(state[i][j] !== 0 &&
               state[i][j] !== goalState[i][j]){
                count++;
            }
        }
    }

    return count;
}

//////////////////////////////////////
// HEURISTIC 2 : Manhattan Distance
//////////////////////////////////////

function manhattanDistance(state){
    let distance = 0;

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){

            let value = state[i][j];

            if(value !== 0){

                for(let x=0;x<3;x++){
                    for(let y=0;y<3;y++){

                        if(goalState[x][y] === value){
                            distance += Math.abs(i-x) + Math.abs(j-y);
                        }

                    }
                }

            }

        }
    }

    return distance;
}

//////////////////////////////////////
// A* SEARCH
//////////////////////////////////////

function aStar(initialState, heuristic){

    let open = [];
    let visited = new Set();

    let start = new PuzzleNode(
        initialState,
        null,
        0,
        heuristic(initialState)
    );

    open.push(start);

    while(open.length>0){

        open.sort((a,b)=>a.f-b.f);

        let current = open.shift();

        if(serialize(current.state) === serialize(goalState)){
            return current;
        }

        visited.add(serialize(current.state));

        let neighbors = getNeighbors(current.state);

        for(let state of neighbors){

            if(!visited.has(serialize(state))){

                let node = new PuzzleNode(
                    state,
                    current,
                    current.g + 1,
                    heuristic(state)
                );

                open.push(node);
            }

        }

    }

    return null;
}

//////////////////////////////////////
// PRINT SOLUTION
//////////////////////////////////////

function printSolution(node){

    let path = [];

    while(node){
        path.push(node.state);
        node = node.parent;
    }

    path.reverse();

    console.log("Steps to solve:\n");

    path.forEach(step=>{
        console.log(step);
    });
}

//////////////////////////////////////
// RUN PROGRAM
//////////////////////////////////////

let initialState = [
    [1,2,3],
    [8,0,4],
    [7,6,5]
];

console.log("Using Misplaced Tiles Heuristic");
let result1 = aStar(initialState, misplacedTiles);
printSolution(result1);

console.log("\nUsing Manhattan Distance Heuristic");
let result2 = aStar(initialState, manhattanDistance);
printSolution(result2);