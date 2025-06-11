import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const Piechart = (props) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
    );

    const data = {
        labels: props.lbl,
        datasets: [
            {
                //label: 'Value',
                backgroundColor: props.colours,
                data: props.data,
            },
            /* {
               label: "label2",
               backgroundColor: "#000000",
               data: [66, 57, 87, 88, 50, 51, 42],
               barPercentage: 1,
               categoryPercentage: 0.8,
            } */
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: props.pieAR,
        plugins: {
            legend: {
                position: 'left',
                labels : {
                    color: props.lblColor,
                }
            },
            title: {
                display: true,
                text: props.title,
                color: props.titleColor,
                font: {
                    weight: 'bold',
                    size: 16,
                },
            }
        }
    }

    return (
        <div className='barchart pt-3 mt-1'>
            <Pie data={data} options={options} />
        </div>
    )
}

export default Piechart