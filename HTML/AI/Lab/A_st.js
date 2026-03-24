class Node {
    constructor(x, y, g, h, parent = null) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }
}


class AStar {

    constructor(grid, start, goal) {
        this.grid = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;
        this.start = start;
        this.goal = goal;

        // 8 directions (including diagonal)
        this.directions = [
            [1,0],[-1,0],[0,1],[0,-1],
            [1,1],[1,-1],[-1,1],[-1,-1]
        ];
    }

    heuristic(x, y) {
        let dx = x - this.goal[0];
        let dy = y - this.goal[1];
        return Math.sqrt(dx*dx + dy*dy); // Euclidean
    }

    isValid(x, y) {
        return (
            x >= 0 &&
            y >= 0 &&
            x < this.rows &&
            y < this.cols &&
            this.grid[x][y] === 1
        );
    }

    reconstructPath(node) {
        let path = [];

        while(node) {
            path.push([node.x, node.y]);
            node = node.parent;
        }

        return path.reverse();
    }

    search() {

        let open = [];
        let closed = new Set();

        let startNode = new Node(
            this.start[0],
            this.start[1],
            0,
            this.heuristic(this.start[0], this.start[1])
        );


        console.log("g  and h for start",startNode.g,startNode.h);


        open.push(startNode);

        while(open.length > 0) {

    // choose node with lowest f
    open.sort((a,b)=>a.f-b.f);

    let current = open.shift();

    console.log("g and h and f for node", current.g, current.h,current.f);

    if(current.x === this.goal[0] && current.y === this.goal[1])
        return this.reconstructPath(current);

    closed.add(current.x + "," + current.y);

            for(let d of this.directions) {

                let nx = current.x + d[0];
                let ny = current.y + d[1];

                if(!this.isValid(nx,ny)) continue;

                if(closed.has(nx + "," + ny)) continue;

                let g = current.g + 1;
                let h = this.heuristic(nx,ny);

                let node = new Node(nx,ny,g,h,current);

                open.push(node);
            }
        }

        return "No path found";
    }
}


const grid = [
    [1,1,1,1,0,0,0,0],
    [1,1,1,1,1,0,0,0],
    [0,0,1,0,1,1,1,1],
    [0,1,1,1,1,1,1,1]
];

const start = [0,0];
const goal = [3,7];

const astar = new AStar(grid,start,goal);

const path = astar.search();

console.log("Optimal Path:");
console.log(path);