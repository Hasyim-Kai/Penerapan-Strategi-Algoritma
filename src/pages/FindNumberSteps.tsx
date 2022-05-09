import { useState } from "react"
import { bruteForceSearch } from "../Logic/brute_force";
import binarySearch from '../Logic/divideNconquer'

export default function FindNumberSteps() {
    let sortedArrayNumber: number[] = [];
    const [bruteForceSteps, setBruteForceSteps] = useState<number | undefined>(0)
    const [divideNconquerSteps, setDivideNconquerSteps] = useState<number | undefined>(0)
    const [arrayNumberInput, setArrayNumberInput] = useState<string>('')
    const [targetNumber, setTargetNumber] = useState<number>(0)

    function handleSubmit(e: any) {
        e.preventDefault()
        sortedArrayNumber = arrayNumberInput?.split(',').map(Number);
        sortedArrayNumber.sort((a, b) => a - b);
        setBruteForceSteps(bruteForceSearch(sortedArrayNumber, targetNumber))
        setDivideNconquerSteps(binarySearch(sortedArrayNumber, targetNumber))
    }

    return <main className="flex flex-col items-center">
        <h1 className="mt-8 font-bold text-4xl">Find Number Steps Algorithm</h1>
        <h4 className="mt-8 font-semibold text-xl">Input some number divided by comma</h4>

        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <input className="mt-3 w-7/12 p-2 border-2 border-blue-300 rounded-lg"
                placeholder="Example : 1,4,2,6,8,3,45,27,467" type="text"
                name="array_number" pattern="[0-9,]{3,}$" title="Number and Comma only"
                onChange={(e) => setArrayNumberInput(e.target.value)} />
            <h4 className="mt-8 font-semibold text-base">Input The Target Number</h4>
            <input type="number" className="mt-3 w-3/12 p-2 border-2 border-blue-300 rounded-lg"
                onChange={(e) => setTargetNumber(Number(e.target.value))} />
            <button type="submit" className="mt-3 p-3 text-white bg-blue-300 rounded-lg shadow-lg">Find it</button>
        </form>

        <div className="mt-16 grid grid-cols-2 gap-4">
            <div className="">
                <h1>Brute Force</h1>
                <h1>{bruteForceSteps} Steps</h1>
            </div>
            <div className="">
                <h1>Divide & Conquer</h1>
                <h1>{divideNconquerSteps} Steps</h1>
            </div>
        </div>
    </main>

}