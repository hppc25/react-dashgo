import { theme } from "@chakra-ui/react";


const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
  
    xaxis: {
      type: "datetime" as const,
      axisBorder: {
          color: theme.colors.gray[600],
      },
      axisTicks: {
          color: theme.colors.gray[600],
      },
      categories: ['2022-05-18T00:00:00.000Z', '2022-05-19T00:00:00.000Z', '2022-05-20T00:00:00.000Z', '2022-05-21T00:00:00.000Z', '2022-05-22T00:00:00.000Z', '2022-05-23T00:00:00.000Z', '2022-05-24T00:00:00.000Z']
    },
    
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      }
    }
  };
  
  const series = [
    { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }
  ];

  export  {
      options,
      series,
  }