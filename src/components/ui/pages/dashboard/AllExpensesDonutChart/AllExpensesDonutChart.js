import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({data}) => {
    // const data = {
    //     labels: ['Health', 'Groceries', 'Eating out', 'Home', 'Services', 'Bills'],
    //     datasets: [
    //         {
    //             label: 'Expenses by category',
    //             data: [5000, 3500, 2000, 300, 200, 150],
    //             backgroundColor: [
    //                 '#a78bfa',
    //                 '#ef4444',
    //                 '#06b6d4',
    //                 '#22c55e',
    //                 '#eab308',
    //                 '#e879f9',
    //             ],
    //             borderWidth: 0,
    //         },
    //     ],
    // };

    const options = {
        cutout: '60%',
        plugins: {
            legend: {
                position: 'right'
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};

export default DonutChart;
