import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
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
    Legend
);

export default function LineChart({ chartInput, chartLabel }: any) {

    return <div className='max-w-2xl mx-auto mt-24 mb-14 text-center'>
        <h1 className='font-semibold text-3xl mb-7 pb-3 border-b-2'>2022 Car Sales</h1>
        <Line data={{
            labels: chartLabel,
            datasets: [
                {
                    label: '2022 Sales',
                    data: chartInput,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: '2021 Sales',
                    data: [12, 21, 31, 45, 13, 24, 36, 42, 22, 10, 13, 25],
                    borderColor: 'rgba(54, 162, 235, 0.8)',
                    backgroundColor: 'rgba(54, 162, 235, 1)',
                },
            ],
        }} />
    </div>;
}