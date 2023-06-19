// eslint-disable-next-line
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const GraphicComponent = ({
    points, daysOfWeekArray, pointsOfDayArray, maxNumberInArrayPoints,
}) => {
    const options = {
        // responsive: false,
        plugins: {
            legend: false,
            tooltip: {
                backgroundColor: '#fff',
                titleColor: '#afafaf',
                bodyFont: {weight: 'bold'},
                bodyColor: '#afafaf',
                // bodySpacing: 8,
                borderColor: 'rgba(229, 229, 229)',
                borderWidth: 2,
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: maxNumberInArrayPoints + 10,
                ticks: {
                    color : '#afafaf',
                    font: {
                    //   family: "Montserrat", // Add your font here to change the font of your x axis
                      size: 17,
                    //   weight: 'bold'
                    },
                  }
            },
            x: {
                ticks: {
                    color : '#afafaf',
                    font: {
                    //   family: "Montserrat", // Add your font here to change the font of your x axis
                      size: 17,
                    //   weight: 'bold'
                    }, 
                }
            }
        },
        elements: {
            point: {
                radius: 5,
                hoverRadius: 5
            },
        }
    }
    const data = {
    labels: daysOfWeekArray,
    datasets: [
        {
            label: "",
            backgroundColor: "rgb(255, 200, 0)",
            borderColor: "rgb(255, 200, 0)",
            data: pointsOfDayArray,
        },
    ],
    };
    return (
        <div className='main_div_graphicComponet'>
            <Line data={data} options={options} />
        </div>
    );
};

export default GraphicComponent;