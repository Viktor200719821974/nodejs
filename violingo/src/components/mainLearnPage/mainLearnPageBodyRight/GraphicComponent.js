// import Plot from 'react-plotly.js';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

// import { arraySchedule, arrayScheduleLine } from '../../../constants/arrays';

const GraphicComponent = ({
    points, daysOfWeekArray, pointsOfDayArray,
}) => {
    const options = {
        // responsive: false,
        plugins: {
          legend: false
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: points + 20
            }

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
            {/* <Plot
                data={[
                    {
                        x: arraySchedule,
                        y: arrayScheduleLine,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                        
                    },
                ]}
                layout={ 
                    { 
                        title: '', 
                        width: 420, 
                        height: 400,
                        // xaxis: {range: [20, 120], title: "Square Meters"},
                        yaxis: {range: [20, 120]},
                        paper_bgcolor: 'rgb(255, 255, 255, 0)',
                        margin: {l: 40},
                        modebar: {
                            remove: [
                                // 'lasso2d', 
                                // 'zoomIn2d', 
                                // 'zoomOut2d', 
                                // 'autoScale2d', 
                                // 'resetScale2d', 
                                // 'zoom2d',
                                // 'select2d',
                                // 'sendDataToCloud',
                                'lasso2d',
                                'select2d',
                                'sendDataToCloud',
                                'zoom2d',
                                'pan2d',
                                'zoomIn2d',
                                'zoomOut2d',
                                'autoScale2d',
                                'resetScale2d',
                                'hoverClosestCartesian',
                                'hoverCompareCartesian',
                                'zoom3d',
                                'pan3d',
                                'orbitRotation',
                                'tableRotation',
                                'handleDrag3d',
                                'resetCameraDefault3d',
                                'resetCameraLastSave3d',
                                'hoverClosest3d',
                                'zoomInGeo',
                                'zoomOutGeo',
                                'resetGeo',
                                'hoverClosestGeo',
                                'hoverClosestGl2d',
                                'hoverClosestPie',
                                'toggleHover',
                                'toImage',
                                'resetViews',
                                'toggleSpikelines',
                                'zoomInMapbox',
                                'zoomOutMapbox',
                                'resetViewMapbox',
                                'togglespikelines',
                                'togglehover',
                                'hovercompare',
                                'hoverclosest',
                                'v1hovermode',
                            ],
                            bgcolor: 'white'
                        }
                    } 
                }
      /> */}
            {/* <svg height='225px' width='340px' direction="ltr">
                {arraySchedule.map(c => 
                    <text x={c.x} y={c.y} fill="#afafaf" fontSize="17px" key={c.id}>
                        {c.content}
                    </text>
                )}
                <g fill="none">
                    {arrayScheduleLine.map(c => 
                        <path stroke="#afafaf" d={`M40 ${c.y} l260 0`} key={c.id} />
                    )}
                </g>
            </svg> */}
        </div>
    );
};

export default GraphicComponent;