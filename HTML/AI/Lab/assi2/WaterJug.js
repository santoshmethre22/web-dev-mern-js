class WaterJug {

   
    constructor(cap1, cap2, target) {
        this.cap1 = cap1; // 3L jug
        this.cap2 = cap2; // 4L jug
        this.target = target; // want 2L in 4L jug
    }


//----------------------------------------------------------->
    // Generate all possible next states
    getNextStates(x, y) {
        let states = [];

        // Fill jugs
        states.push([this.cap1, y]); // fill jug1
        states.push([x, this.cap2]); // fill jug2


        // ------------------------------------>
        // Empty jugs---------
        states.push([0, y]); // empty jug1
        states.push([x, 0]); // empty jug2

        // Pour jug1 -> jug2
        let pour1 = Math.min(x, this.cap2 - y);

        console.log('THE POUR STATEIS ',pour1);
        states.push([x - pour1, y + pour1]);

        // Pour jug2 -> jug1
        let pour2 = Math.min(y, this.cap1 - x);
        states.push([x + pour2, y - pour2]);

        return states;
    }


    bfs() {
        let queue = [];
        let visited = new Set();

// -------->


        queue.push({ state: [0, 0], path: [[0, 0]] });
        visited.add("0,0");

      let explored = 0;

        while (queue.length > 0) {
            let { state, path } = queue.shift();
            let [x, y] = state;

           explored++;

            // Goal condition: 4L jug has 2L
            if (y === this.target) {
                console.log("BFS Solution Path:");
                console.log(path);
                console.log("States explored:", explored);
                return path;
            }

            for (let [nx, ny] of this.getNextStates(x, y)) {
                let key = `${nx},${ny}`;
                console.log("key is ",key);
                if (!visited.has(key)) {
                    visited.add(key);
                    queue.push({
                        state: [nx, ny],
                        path: [...path, [nx, ny]]
                    });
                }
            }
        }

        console.log("No solution found (BFS)");
    }


    dfs() {
        let visited = new Set();
        let path = [];
        let explored = { count: 0 };

        const dfsHelper = (x, y) => {
            explored.count++;
            path.push([x, y]);

            if (y === this.target) {
                console.log("DFS Solution Path:");
                console.log(path);
                console.log("States explored:", explored.count);
                return true;
            }

            visited.add(`${x},${y}`);

            for (let [nx, ny] of this.getNextStates(x, y)) {
                let key = `${nx},${ny}`;
                if (!visited.has(key)) {
                    if (dfsHelper(nx, ny)) return true;
                }
            }

            path.pop();
            return false;
        };

        dfsHelper(0, 0);
    }
}

// Run the program
let jug = new WaterJug(3, 4, 2);

jug.bfs(); // Optimal solution
//jug.dfs(); // DFS solution