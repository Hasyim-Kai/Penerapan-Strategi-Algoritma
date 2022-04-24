const adjacencyList = new Map();
const node = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const edge = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
    ['C', 'G']
]

const addNode = node => {
    adjacencyList.set(node, [])
}

const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination);
    // adjacencyList.get(destination).push(origin);
}

node.forEach(addNode);
edge.forEach(edge => addEdge(...edge));

// console.log(adjacencyList);

function DepthFirstSearch(start, visited = new Set()) {
    visited.add(start)
    const destinations = adjacencyList.get(start)
    // console.log(visited)

    for (const destination of destinations) {
        console.log(destination)
        if (destination === 'E') {
            console.log(`found node E`)
        }
        if (!visited.has(destination)) {
            DepthFirstSearch(destination, visited)
        }
    }
}

DepthFirstSearch('A');