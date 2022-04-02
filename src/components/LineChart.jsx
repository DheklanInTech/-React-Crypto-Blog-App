import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    // Tooltip,
    // Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    // Tooltip,
    // Legend
    )
    

const { Text } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
    
          ticks: {
            beginAtZero: true,
        
        },
    },
    },
  };





  return (
    <>
      <Row className="chart-header">
        <Text level={2} className="chart-title">{coinName} Price Chart </Text>
        <Col className="price-container">
          <Text level={5} className="price-change">Change: {coinHistory?.data?.change}%</Text>
          <Text level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Text>
        </Col>
      </Row>
      
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;