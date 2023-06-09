import React from 'react'
import {
  Chip
} from "@material-tailwind/react";
import {
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableFooter,
  TableContainer,
  Pagination
} from '@/widgets/table'

function Header() {
  return (
    <TableHeader>
      <tr>
        <th className="border-b border-blue-gray-50 py-3 px-5 text-left w-24"><p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">fingerprint</p></th>
        <th className="border-b border-blue-gray-50 py-3 px-5 text-left"><p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Intent</p></th>
        <th className="border-b border-blue-gray-50 py-3 px-5 text-left"><p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">IP Count</p></th>
        <th className="border-b border-blue-gray-50 py-3 px-5 text-left"><p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Last Visit</p></th>
      </tr>
    </TableHeader>
  )
}

function Body({dataTable, onAction}) {
  return (
    <TableBody>
      {dataTable.map((visitors, i) => (
        
        <TableRow key={i}>
          <TableCell>
              <div className="flex text-sm">
                <p>{visitors._id}</p>
              </div>
          </TableCell>
          <TableCell>
            <div className="flex text-sm">
              {visitors.ipCount && 
                <Chip
                  variant="gradient"
                  color={visitors.ipCount > 5 ? "red" : visitors.ipCount > 3 ? "blue" : "green"}
                  value={visitors.ipCount > 5 ? "risky" : visitors.ipCount > 3 ? "medium" : "safe"}
                  className="py-0.5 px-2 text-[11px] font-medium"
                />
              }
            </div>
          </TableCell>
          <TableCell>
            <div className="flex text-sm">
              <p>{visitors.ipCount}</p>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex text-sm">
              <p>{visitors.lastVisit}</p>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default function VisitorsTable({visitors, resultsPerPage, totalResults, onPageChange, onAction}) {

  return (
    <>
      <TableContainer className="mb-8">
        <Table>
          <Header />
          <Body dataTable={visitors} onAction={onAction} />
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