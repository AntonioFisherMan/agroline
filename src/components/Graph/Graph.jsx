
import React, { useState, useEffect } from 'react'
import { Line, Bar, Radar, Pie } from 'react-chartjs-2'


const GraphElements=()=>{
    useEffect(() => {
        return chart(), bar(), radar(), pie()
    }, [])
    const [chartData, setChartData] = useState({})
    const [barData, setBarData] = useState({})
    const [radarData, setRadarData] = useState({})
    const [pieData, setPieData] = useState({})

    const getRandomColor = (numBars) => {
        const letters = "0123456789ABCDEF".split("")
        let colors = []
        for (let i = 0; i < numBars; i++) {
            let color = '#';
            for (let j = 0; j < 6; j++) {
                color += letters[Math.floor(Math.random() * 16)]
            }
            colors.push(color)
        }
        return colors

    }
    const chart = () => {
        setChartData({
            labels: ['יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי'],
            datasets: [
                {
                    label: 'רמת עובי',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: 'green',
                    borderWidth: 2,
                    borderColor: 'green',
                    pointBackgroundColor: "yellow",
                    pointBorderColor: 'blue'
                },
                {
                    label: 'השמטות כמות',
                    data: [10, 2, 5, 1, 0],
                    backgroundColor: ['blue'],
                    borderWidth: 2,
                    borderColor: 'blue'

                }
            ]
        })
    }
    const bar = () => {
        const labels= ['יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי']
        setBarData({
            labels: labels,
            datasets: [{
                label: "בר עבה",
                backgroundColor: getRandomColor(labels.length),
                barThickness: 50,
                data: [10, 20, 30, 40, 50, 60, 70]
            }]
        })
    }
    const radar = () => {
        const labels = ['נדוש', 'כדורגל', 'טניס', 'שחייה']
        setRadarData({
            labels: labels,
            datasets: [
                {
                    label: "גרף ספורט",
                    borderColor: 'red',
                    data: [20, 10, 4, 2]
                },
                {
                    label: "גרף כלכלי",
                    borderColor: 'blue',
                    data: [110, 44, 24, 12]
                }
            ]
        })
    }
    const pie = () => {
        const labels = ["תפוח עץ", "סמסונג", "נוקיה"]
        setPieData({
            labels: labels,
            datasets: [
                {
                    label: "גרף ספורט",
                    backgroundColor: getRandomColor(labels.length),
                    data: [20, 10, 2]
                },
            ]
        })
    }
    return(
        <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-6">
                <Line data={chartData} options={{
                    legend: { labels: { fontColor: 'green', fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", fontSize: 16 } },
                    responsive: true,
                    title: { text: "סולם עובי", fontSize: 23, display: true },
                    tooltips: { backgroundColor: 'red' },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                },
                                stacked: true
                            }
                        ]
                    }
                }} />
            </div>
            <div className="col-12  col-lg-6">
                <Bar data={barData} options={{
                    responsive: true,
                    title: { text: "סולם עוביt", display: true },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    maxTicksLimit: 5,
                                    beginAtZero: true,
                                    autoSkip: true
                                },

                            }
                        ],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }} />
            </div>
            <div className="col-12 col-lg-6">
                <Radar data={radarData} />
            </div>
            <div className="col-12 col-lg-6">
                <Pie data={pieData} options={{


                }} />
            </div>
        </div>
    </div>
    )
}

export default GraphElements