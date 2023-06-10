import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { userService } from "@/services/user.service";




 
export default function DeleteUserDialog({open,setOpen,selectedUser,setUsers,users}) {
  
 
  const handleOpen = () => setOpen(!open);


  console.log(selectedUser);


  const deleteUser = ()=>{
      console.log("delteing user");
      userService.deleteUser(selectedUser.id).then(res=>{
          let filteredUsers = users.filter(user=>user.id!==selectedUser.id);
          setUsers([...filteredUsers]);
          setOpen(false)
      })
  }


 
  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} className="p-5">
          <h1 className="text-2xl">Delete User</h1>
        
        <p>Are you sure you want to delete this user?</p>
        


        <DialogFooter>
        <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button   
            variant="gradient"
            
        
                   onClick={deleteUser}     >
            <span>Confirm</span>
          </Button>
        </DialogFooter>


      </Dialog>
    </Fragment>
  );
}