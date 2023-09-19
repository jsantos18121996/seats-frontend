import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const beneficios = [72, 56,20, 36,80, 40, 35, 25, 30, 12, 60];
const terrains = ["T001", "T002", "T003", "T004", "T005", "T006"];

const myOptions = {
    responsive : true,
    animation: false,
    plugins:{ 
        legend: {
            display : false
        }
    },
    scales: {
        y: {
            stacked: true
        },
        x: {
            stacked: true
        }
    }
};

const myData = {
    labels : terrains,
    datasets : [//aqui ira el arreglo de terrenos
        {
            labels: "Sanos",
            data: beneficios,
            //backgroundColor: 'rgba(0, 220, 195, 0.5)'
            backgroundColor: 'green',
            stack: 'Stack 0'
        },
        {
            labels: "Enfermos",
            data: beneficios,
            //backgroundColor: 'rgba(0, 220, 195, 0.5)'
            backgroundColor: 'red',
            stack: 'Stack 0'
        },
        {
            labels: "No data",
            data: beneficios,
            //backgroundColor: 'rgba(0, 220, 195, 0.5)'
            backgroundColor: 'gray',
            stack: 'Stack 0'
        }
    ]
};

export default function Bars() {
    return <Bar data={myData} options={myOptions} />
}