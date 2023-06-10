import React, { useMemo, useState, useEffect, useCallback } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { requirementVisitorsData } from "@/data";
import { VisitorsTable } from "@/widgets/tables";
import { userService } from "../../services/user.service";
import UsersTable from "@/widgets/tables/userstable";
import UpdateUser from "@/widgets/diaglogs/updateuser";
import UpdateUserPasswordDialog from "@/widgets/diaglogs/updateuserpassword";
import DeleteUserDialog from "@/widgets/diaglogs/deleteuser";



export function Users() {
  const [visitorsData, setVisitorsData] = useState(null);
  const [usersData,setUsersData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)  
  const [totalResults, setTotalResults] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)


  const [updateModalOpen,setUpdateModalOpen] = useState(false);
  const [updatePasswordModalOpen,setUpdatePasswordModalOpen] = useState(false);
  const [deleteModalOpen,setDeleteModalOpen] = useState(false);
  const [selectedUser,setSelectedUser] = useState()

/*
  const visitorData=useMemo(()=>{
    return requirementVisitorsData.results;
  },[])
*/
  // const refreshVisitors= useCallback(() => {
  //   var start = new Date();
  //   start.setHours(0,0,0,0);

    
  //   setVisitorsData(requirementVisitorsData.results)
  //   setTotalResults(requirementVisitorsData.totalResults)
  //   setIsLoaded(true)
  // }, [currentPage]);


  const refreshUsers = useCallback(()=>{
    userService.getUsers(currentPage).then(res=>{
      console.log(res.results)
      setUsersData(res.results);
      setTotalResults(res.totalResults)
      setIsLoaded(true)
    })

  },[currentPage])






  useEffect(() => {
    refreshUsers()  
  }, [refreshUsers])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }


  const actions = {
    updateUser: async(user)=>{
      console.log(user,"Updating")
      
      setUpdateModalOpen(true)
    },
    updatePassword:async(user)=>{

      setUpdatePasswordModalOpen(true);
      console.log(user,"updating password");
    },
    deleteUser:async(user)=>{
      console.log(user,"deleting user")
      setDeleteModalOpen(true)
    }
  }


  const onAction = (user,action)=>{
    setSelectedUser(user);
    actions[action](user);

  }




  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Your Users
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          {(totalResults > 0) && <UsersTable users={usersData}  resultsPerPage={10} totalResults={totalResults} onPageChange={handlePageChange}  onAction={onAction} />}
          {(totalResults === 0) && <p>No Users Yet</p>}
        </CardBody>
      </Card>
      <UpdateUser open={updateModalOpen} setOpen={setUpdateModalOpen} selectedUser={selectedUser} setSelectedUser={setSelectedUser} users={usersData} setUsers={setUsersData} />
      <UpdateUserPasswordDialog open={updatePasswordModalOpen} setOpen={setUpdatePasswordModalOpen} selectedUser={selectedUser}  />
      <DeleteUserDialog open={deleteModalOpen} setOpen={setDeleteModalOpen} selectedUser={selectedUser}  users={usersData} setUsers={setUsersData}/>
    </div>
  );
}

export default Users;
