import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartContainer from "../common/ChartContainer";

const ExampleChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <ChartContainer title="Monthly Sales Data">
      <Bar data={data} />
    </ChartContainer>
  );
};

export default ExampleChart;
