import React, { useMemo, useEffect, useCallback, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
  EnvelopeIcon,
  UserGroupIcon,
  NoSymbolIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";

import  {FormateCardData, FormateDashboardChartData} from '@/helper/dashboard_data_formater';
import { integrationService } from "@/services";

export function Home() {
  const [chartData, setChartData] = useState([])
  const [cardData, setCardData] = useState([])


  const refreshDashboard= useCallback(() => {
    var start = new Date();
    start.setHours(0,0,0,0);

    return integrationService.getChartData()
      .then(response => {      
        console.log(response)
        if(response && response.data)
        {
          let calculated_data= FormateDashboardChartData(response.data);
          setChartData(
          [      
            {
              color: "brown",
              title: "Revenue",
              description: "Revenue over time",
              footer: "updated 4 min ago",
              chart: calculated_data.ipBarOptions,
            }]
          );

          let box_data= FormateCardData(response.data);
          console.log(box_data)
          setCardData(
          [
            {
              color: "blue",
              icon: UserGroupIcon,
              title: "Unique IP Visits",
              value: box_data.visits,
              footer: {
                label: "just now",
              },
            },
            {
              color: "red",
              icon: ExclamationCircleIcon,
              title: "Blocked IP Visits",
              value: box_data.blocked,
              footer: {
                label: "just now",
              },
            },
          ])
        }
      })
      .catch(err => {
        console.log(err);
      })    
    }, [])

  useEffect(() => {
    refreshDashboard()    
  }, [refreshDashboard])

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
        {cardData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-12 grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-1">
        {chartData.slice(0, 1).map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;