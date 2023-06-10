import React from 'react'
import { NavLink } from 'react-router-dom'
import {

    Button,
    Typography,
  } from "@material-tailwind/react";


const SidebarItem = ({name,layout,path,icon,sidenavColor,sidenavType}) => {
  return (
            <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
  )
}

export default SidebarItem