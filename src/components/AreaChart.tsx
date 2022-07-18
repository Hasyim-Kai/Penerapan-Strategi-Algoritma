import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export default function AreaChart({ chartInput, chartLabel }: any) {

    return <div className='max-w-2xl mx-auto mt-24 mb-14 text-center'>
        <h1 className='font-semibold text-3xl mb-7 pb-3 border-b-2'>2022 Car Sales</h1>
        <Line data={{
            labels: chartLabel,
            datasets: [
                {
                    label: '2022 Sales', fill: true,
                    data: chartInput,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        }} />
    </div>;
}