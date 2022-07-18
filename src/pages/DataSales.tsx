import { useState } from "react";
import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

export default function DataSales() {
    const [salesChartData, setSalesChartData] = useState<number[]>([46, 51, 31, 12, 45, 57, 68, 77, 86, 52, 42, 59])
    const salesChartLabelList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function handleChangeSales(inputValue: any) {
        let newChartData = salesChartData
        newChartData[inputValue.name] = Number(inputValue.value);
        setSalesChartData([...newChartData]);
    }

    const inputStyle = `mt-3 w-1/12 mx-3 p-2 border-2 border-blue-500 rounded-lg`
    return <section className="">
        <header className="sticky top-0 flex flex-wrap bg-white border-b-2 border-blue-500 w-full py-5 shadow-lg">
            {salesChartLabelList.map((data, index) => <input className={inputStyle} type="number" value={salesChartData[index]} name={`${index}`} onChange={(e) => handleChangeSales(e.target)} placeholder={data} />)}
        </header>

        {/* CHART */}
        <article className="">
            <BarChart chartInput={salesChartData} chartLabel={salesChartLabelList} />
            <LineChart chartInput={salesChartData} chartLabel={salesChartLabelList} />
            <AreaChart chartInput={salesChartData} chartLabel={salesChartLabelList} />
        </article>
    </section>
}