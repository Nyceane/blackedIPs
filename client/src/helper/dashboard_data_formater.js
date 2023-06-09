import moment from "moment";
import { chartsConfig } from "@/configs";


const FormateCardData = (data) => {
  let chartData = data.dailyResults;

  let visits = 0;
  let blocked = 0;

  for(let i = 0; i < chartData.length; i++)
  {
    visits += chartData[i].visitIpCount;
    blocked += chartData[i].blacklistedIpCount;
  }

  return { visits, blocked }
}



const FormateDashboardChartData = (data) => {
  let chartData = data.dailyResults;
  console.log(chartData)

  let visitDataSet = [];
  let blockedDataSet = [];

  for(let i = 0; i < chartData.length; i++)
  {
    visitDataSet.push({x:chartData[i].day, y:chartData[i].visitIpCount});
    blockedDataSet.push({x:chartData[i].day, y:chartData[i].blacklistedIpCount});
  }
  console.log(visitDataSet);
  let ipBarOptions = {
        type:"bar",
        series:  [
          {
            name: 'visitors',
            data: visitDataSet,
            backgroundColor: 'rgb(59 130 246)',
          },
          {
            name: 'blocked',
            data: blockedDataSet,
            backgroundColor: 'rgb(88 28 135)',
          }
        ],
      options:{
        ...chartsConfig,
        chart:{
            ...chartsConfig.chart,
            stacked:true,
        }
    }};
  console.log(ipBarOptions)

  return { ipBarOptions }
};


export {FormateCardData, FormateDashboardChartData}