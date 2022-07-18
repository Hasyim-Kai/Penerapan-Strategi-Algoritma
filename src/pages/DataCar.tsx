import { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import PieChart from "../components/PieChart";
import PolarChart from "../components/PolarChart";
import RadarChart from "../components/RadarChart";

export default function DataCar() {
    const [carChartData, setCarChartData] = useState<number[]>([2, 6, 3, 10, 11])
    const carChartLabelList = ['Ferrari', 'Innova', 'Alphard', 'Avanza', 'Xpander'];

    function handleChangeCar(inputValue: any) {
        let newChartData = carChartData
        newChartData[inputValue.name] = Number(inputValue.value);
        setCarChartData([...newChartData]);
    }

    const inputStyle = `mt-3 w-1/12 mx-4 p-2 border-2 border-blue-500 rounded-lg`
    return <section className="w-full">
        <header className="sticky top-0 bg-white border-b-2 border-blue-500 w-full py-5 shadow-lg">
            {carChartLabelList.map((data, index) => <input className={inputStyle} type="number" value={carChartData[index]} name={`${index}`} onChange={(e) => handleChangeCar(e.target)} placeholder={data} />)}
        </header>

        {/* CHART */}
        <article className="grid grid-cols-2 gap-5">
            <DoughnutChart chartInput={carChartData} chartLabel={carChartLabelList} />
            <PieChart chartInput={carChartData} chartLabel={carChartLabelList} />
            <RadarChart chartInput={carChartData} chartLabel={carChartLabelList} />
            <PolarChart chartInput={carChartData} chartLabel={carChartLabelList} />
        </article>
    </section>
}