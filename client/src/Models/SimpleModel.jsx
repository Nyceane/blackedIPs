import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  } from "@material-tailwind/react";


function SimpleModel({ btnTitle,headerText,Body }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button className="text-center" onClick={handleOpen} variant="gradient">
       {btnTitle}
      </Button>
      <Dialog size="lg" className="overflow-y-auto overflow-x-hidden max-h-[90vh]" open={open} handler={handleOpen}>
        <DialogHeader className="justify-center" >{headerText}</DialogHeader>
        <DialogBody className="justify-center">
          <Body/>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default SimpleModel;
