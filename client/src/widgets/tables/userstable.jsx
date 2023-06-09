import React from 'react'
import {
  Chip,
  Button,

} from "@material-tailwind/react";
import {
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableFooter,
  TableContainer,
  Pagination,
} from '@/widgets/table'
import RoleBadge from './Badge';
import {    
  UserIcon,
  TrashIcon,
  PencilSquareIcon
} from "@heroicons/react/24/solid";


function Header() {
  return (
    <TableHeader>
      <tr>
      <th className="border-b border-blue-gray-50 py-3 px-5 text-left"><p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Name</p></th>
        <th className="border-b border-blue-gray-50 py-3 px-5 text-left"><p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Email</p></th>
        <th className="border-b border-blue-gray-50 py-3 px-5 text-left"><p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Role</p></th>
        <th className="border-b border-blue-gray-50 py-3 px-5 text-left"><p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Actions</p></th>
        
      </tr>
    </TableHeader>
  )
}

function Body({dataTable, onAction}) {
  return (
    <TableBody>
      {dataTable.map((user, i) => (
        
        <TableRow key={i}>
          <TableCell>
              <div className="flex text-sm">
                <p className="font-semibold text-purple-600">{user.name}</p>
              </div>
          </TableCell>
          <TableCell>
          <div className="flex text-sm">
                <p className="font-semibold text-purple-600">{user.email}</p>
              </div>
          </TableCell>
          <TableCell>
            <div className="flex text-sm">
              <RoleBadge role={user.role} /> 
            </div>
          </TableCell>          
          <TableCell>
          <div className="flex items-center space-x-4">
              <button layout="link" size="icon" aria-label="Edit" onClick={(e) => {e.preventDefault(); if(onAction){onAction(user, 'updateUser')}} }>
                <UserIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button layout="link" size="icon" aria-label="Edit Password" onClick={(e) => {e.preventDefault(); if(onAction){onAction(user, 'updatePassword')}} }>
                <PencilSquareIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button layout="link" size="icon" aria-label="Delete" onClick={(e) => {e.preventDefault(); if(onAction){onAction(user, 'deleteUser')}} }>
                <TrashIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default function UsersTable({users, resultsPerPage, totalResults, onPageChange, onAction}) {

  return (
    <>
      <TableContainer className="mb-8">
        <Table>
          <Header />
          <Body dataTable={users} onAction={onAction} />
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChange}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
  )
}