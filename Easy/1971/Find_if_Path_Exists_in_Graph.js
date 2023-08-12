/**
 * Find if Path Exists in Graph
 */
var validPath = function(n, edges, start, end) {
    // Create a hashmap to be used as our adjacency list
    const graph = new Map();
    
    // Create a set to store our visited nodes
    const visited = new Set();
    
    // Build adjacency list (undirected)
    for (const [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        
        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }
    function dfs(v) {
        // Add to visited set
        visited.add(v);
                
        // Get adjacent vertices
        const edges = graph.get(v);
                
        // For all adjacent vertices, run DFS
        if (edges && edges.length > 0) {
            for (const e of edges) {
                if (!visited.has(e)) dfs(e);
            }
        }
    }
        
    // DFS from starting input node
    dfs(start);
        
    // Return true/false if our visited set has our end node
    return visited.has(end);
};
let n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0,destination = 5;
let res=validPath(n,edges,source,destination);
console.log(res);