import React from 'react';
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

const DualLinechart = (props) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: props.palette.legendtxt,
                }
            },
            title: {
                display: true,
                text: props.title,
                color: props.palette.chartTitle,
            },
        },
        //indexAxis: 'x',
        scales: {
            x: { // defining min and max so hiding the dataset does not change scale range
                beginAtZero: true,
                title: {
                    display: true,
                    text: props.xAxis,
                    color: props.palette.titleX,
                },
                //max: 15,
                min: 0,
                ticks: {
                    //stepSize: 15,
                    color: props.palette.lblX,
                },
                grid: {
                    color: props.palette.grid,
                },
            },
            y: { // defining min and max so hiding the dataset does not change scale range
                beginAtZero: true,
                title: {
                    display: true,
                    text: props.yAxis,
                    color: props.palette.titleY
                },
                ticks: {
                    color: props.palette.lblY,
                },                
                grid: {
                    color: props.palette.grid,
                },
            },
        }
    };

    const data = {
        labels: props.lblData,
        datasets: props.datasets,
    };

    return (
        <div style={{ padding: '25px 0 0 0px' }}>
            <Line data={data} options={options} />
        </div>
    );
}

export default DualLinechart
