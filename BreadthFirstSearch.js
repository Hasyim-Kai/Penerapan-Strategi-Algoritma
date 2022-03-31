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

function BreadthFirstSearch (start, targetDestination){
    const visited = new Set(start)
    const queue = [start]

    while(queue.length > 0){
        // console.log(queue)

        const node = queue.shift()
        const destinations = adjacencyList.get(node)

        for(const destination of destinations){          
            if(!visited.has(destination)){
                visited.add(destination)
                queue.push(destination)
                if(destination === targetDestination){
                    console.log(`found in node => ` + destination)
                } else console.log(destination)                
            }
        }
    }
}

BreadthFirstSearch('A', 'F')