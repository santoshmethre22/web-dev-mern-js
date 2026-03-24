
class AOStarSearch {

    constructor(heuristics, graph) {
        this.h = heuristics;
        this.graph = graph;

        this.parent = {};
        this.bestBranch = {};
        this.status = {};

        for (let node in heuristics)
            this.status[node] = false;
    }

    computeCost(node) {

        if (!this.graph[node] || this.graph[node].length === 0)
            return [this.h[node], []];

        let minCost = Infinity;
        let bestBranch = [];

        for (let branch of this.graph[node]) {

            let branchCost = 0;

            for (let child of branch)
                branchCost += this.h[child] + 1;

            if (branchCost < minCost) {
                minCost = branchCost;
                bestBranch = branch;
            }
        }
         console.log("best Branch",bestBranch);
        return [minCost, bestBranch];
    }




    // for every node
    solve(node) {

        if (this.status[node] || !this.graph[node])
            return;

        let [newCost, bestBranch] = this.computeCost(node);

        this.h[node] = newCost;
        this.bestBranch[node] = bestBranch;

        for (let child of bestBranch) {
            this.parent[child] = node;
            this.solve(child);
        }

        let [updatedCost, updatedBranch] = this.computeCost(node);
        console.log("updated cos ,updated Branch",updatedCost,updatedBranch);
        
        if (this.h[node] !== updatedCost) {

            this.h[node] = updatedCost;
            this.bestBranch[node] = updatedBranch;

            if (this.parent[node])
                this.solve(this.parent[node]);
        }
    }

    getOptimalPath(node) {

        let path = [node];

        let children = this.bestBranch[node] || [];

        for (let child of children)
            path = path.concat(this.getOptimalPath(child));
        console.log("optimal path",path)
        return path; 
    }

    printOptimalPath(start) {

        let path = this.getOptimalPath(start);

        console.log("\n--- Optimal Solution Path ---");
        console.log(path.join(" -> "));
    }
}


// Graph (same as Python)
const graph = {

    A: [["B","E"], ["D"]],
    B: [["H","K"]],
    E: [["H","K"]],
    H: [["I"]],
    I: [["L"]],
    K: [["L"]],
    D: [],
    L: []
};


// Heuristics
const heuristics = {

    A:0,
    B:4,
    E:3,
    D:10,
    H:2,
    K:3,
    I:8,
    L:5
};


// Run AO*
const solver = new AOStarSearch(heuristics, graph);

solver.solve("A");

console.log("--- Final Heuristic Values ---");

for (let node in solver.h)
    console.log("Node", node, ":", solver.h[node]);

solver.printOptimalPath("A");
solver.getOptimalPath("A")