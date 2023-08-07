/**
 * Find Center of Star Graph
 */
var findCenter = function(edges) {
    return edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] ? edges[0][0] : edges[0][1];
};