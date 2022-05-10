function dynamicProgrammingFib(n: number, prevValues:any = []):any {
    if (prevValues[n] != null) return prevValues[n];

    let result : number;
    if (n <= 2) { result = 1 } else {
        result = dynamicProgrammingFib(n - 1, prevValues) + dynamicProgrammingFib(n - 2, prevValues)
    }
    prevValues[n] = result
    return result
}

function fib(n: number):any {
    if (n <= 2) { return 1 } else {
        return fib(n - 1) + fib(n - 2)
    }
}

export { dynamicProgrammingFib, fib }

const fibonacciIndex = 40
console.time()
console.log(`Fibonacci value in Index ${fibonacciIndex} is : ${fib(fibonacciIndex)} `);
// console.log(`Fibonacci value in Index ${fibonacciIndex} is : ${dynamicProgrammingFib(fibonacciIndex)} `);
console.timeEnd()