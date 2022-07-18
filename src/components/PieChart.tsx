import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart({ chartInput, chartLabel }: any) {

  return <div className='max-w-2xl mx-auto mt-24 mb-14 text-center'>
    <h1 className='font-semibold text-2xl mb-7 pb-3 border-b-2'>Car Sales</h1>
    <Pie data={{
      labels: chartLabel,
      datasets: [
        {
          label: '# of Votes',
          data: chartInput,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)',
            'rgba(255, 130, 0, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 130, 0, 0.8)'
          ],
          borderWidth: 1,
        },
      ],
    }} />
  </div>;
}