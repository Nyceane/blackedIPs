import React, { useMemo, useState, useEffect, useCallback } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { VisitorsTable } from "@/widgets/tables";
import { integrationService } from "@/services";



export function WatchLists() {
  const [visitorsData, setVisitorsData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)  
  const [totalResults, setTotalResults] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const refreshVisitors= useCallback(() => {
    var start = new Date();
    start.setHours(0,0,0,0);

    return integrationService.getVisits()
      .then(response => {      
        if(response && response.data)
        {
          console.log(response)
          setTotalResults(response.data.results.length);
          setVisitorsData(response.data.results);
        }
        setIsLoaded(true)
      })
      .catch(err => {
        setError(err)
      })    
    }, [currentPage])

  useEffect(() => {
    refreshVisitors()    
  }, [refreshVisitors])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Your Visitors
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          {(totalResults > 0) && <VisitorsTable visitors={visitorsData} resultsPerPage={100} totalResults={totalResults} onPageChange={handlePageChange}  />}
          {(totalResults === 0) && <p>No Visitors Yet</p>}
        </CardBody>
      </Card>
    </div>
  );
}

export default WatchLists;
