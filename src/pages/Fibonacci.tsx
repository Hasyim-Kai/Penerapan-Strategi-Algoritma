import { useState } from "react";
import { dynamicProgrammingFib, fib } from "../Logic/DynamicProgramming_Fibonacci";

export default function Fibonacci() {
    const [normalFibonacci, setNormalFibonacci] = useState<number | undefined>(0)
    const [memoFibonacci, setMemoFibonacci] = useState<number | undefined>(0)

    const [normalFibonacciPerformance, setNormalFibonacciPerformance] = useState<number>(0)
    const [memoFibonacciPerformance, setMemoFibonacciPerformance] = useState<number>(0)

    const [targetNumber, setTargetNumber] = useState<number>(0)

    function handleSubmit(e: any) {
        e.preventDefault()
        const t0 = performance.now();
        setNormalFibonacci(fib(targetNumber))
        const t1 = performance.now();
        setNormalFibonacciPerformance((Number(t1 - t0)))

        const m0 = performance.now();
        setMemoFibonacci(dynamicProgrammingFib(targetNumber).toLocaleString('de-DE', { minimumFractionDigits: 0 }))
        const m1 = performance.now();
        setMemoFibonacciPerformance(Number(m1 - m0))
    }

    return <main className="flex flex-col items-center">
        <h1 className="mt-8 font-bold text-4xl text-center">Compare Time of Normal Vs. Memoization Fibonacci</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <h4 className="mt-8 font-semibold text-base">Input The Nth Fibonacci Number</h4>
            <input type="number" className="mt-3 w-3/12 p-2 border-2 border-blue-500 rounded-lg"
                onChange={(e) => setTargetNumber(Number(e.target.value))} />
            <button type="submit" className="mt-3 p-3 text-white bg-blue-500 rounded-lg shadow-lg">Find it</button>
        </form>

        <h1 className="mt-16 font-semibold text-2xl">The {targetNumber} th Fibonacci Number is</h1>
        <h1 className="mt-3 font-bold text-4xl">{memoFibonacci}</h1>

        <h1 className="text-2xl mb-5 mt-16">Time Performance to find the result on each Algorithm</h1>
        <div className="border-2 rounded-xl p-7 max-w-3xl mx-auto grid grid-cols-2 gap-4">
            <div className="text-center font-semibold text-xl">
                <h1>Normal Fibonacci Performance</h1>
                <h1 className="text-4xl font-bold pt-2">{normalFibonacciPerformance.toFixed(2)} ms</h1>
            </div>
            <div className="text-center font-semibold text-xl">
                <h1>Memoization Fibonacci Performance</h1>
                <h1 className="text-4xl font-bold pt-2">{memoFibonacciPerformance.toFixed(2)} ms</h1>
            </div>
        </div>
    </main>
}