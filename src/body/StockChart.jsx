import React, {useEffect, useState} from 'react';
import {Chart as ChartJs} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import './body.css'
import {polygonKey} from "../../.keys";

export default function StockChart({stock}) {
    const [chartData, setChartData] = useState(null);

    let today = new Date();
    let thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    let todayString = today.toISOString().split('T')[0];
    let thirtyDaysAgoString = thirtyDaysAgo.toISOString().split('T')[0];

    useEffect(() => {
        if (stock) {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
            };

            fetch(`https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/${thirtyDaysAgoString}/${todayString}?apiKey=${polygonKey}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    if (result && result.results) {
                        const labels = result.results.map(item => new Date(item.t).toISOString().split('T')[0]);
                        const data = result.results.map(item => item.c);
                        setChartData({labels, data});
                    }
                })
                .catch(error => console.log('error', error));
        }
    }, [stock]);

    return (
        <div className="chart-wrapper">
            <div className="chart-top-line">
                <div className="chart-name">Chart</div>
                <div className="chart-options-bar">
                    <div className="chart-options-piece">M5</div>
                    <div className="chart-options-piece">M15</div>
                    <div className="chart-options-piece">M30</div>
                    <div className="chart-options-piece">H1</div>
                    <div className="chart-options-piece selected">D</div>
                    <div className="chart-options-piece">W</div>
                    <div className="chart-options-piece">Mo</div>
                </div>
            </div>
            <div className="chart-visual">
                <Line key={Math.random()}
                      data={{
                          labels: chartData?.labels,
                          datasets: [
                              {
                                  label: 'Stock price',
                                  data: chartData?.data,
                                  backgroundColor: "#300EFF",
                                  borderColor: "#300EFF",
                                  pointBackgroundColor: "#FFF",
                              },
                          ],
                      }}
                      options={{
                          scales: {
                              y: {
                                  position: 'right',
                                  grid: {
                                      display: false,
                                  },
                                  ticks: {
                                      source: 'auto',
                                      maxTicksLimit: 6,
                                  },
                              },
                              x: {
                                  grid: {
                                      display: false,
                                  },
                                  ticks: {
                                      source: 'auto',
                                      maxTicksLimit: 6,
                                  },
                              },
                          },
                          elements: {
                              line: {
                                  tension: 0,
                              },
                          },
                          plugins: {
                              legend: {
                                  display: false,
                              },
                              title: {
                                  text: "Stock Price over Time",
                              },
                          },
                      }}
                />
            </div>
        </div>

    );
};