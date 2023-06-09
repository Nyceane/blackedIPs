import React, { useContext } from 'react'
import classNames from 'classnames'

interface Props extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const TableCell = React.forwardRef<HTMLTableCellElement, Props>(function TableCell(props, ref) {
  const { className, children, ...other } = props

  const baseStyle = "py-3 px-5 border-b border-blue-gray-50"

  const cls = classNames(baseStyle, className)

  return (
    <td className={cls} ref={ref} {...other}>
      {children}
    </td>
  )
})

export default TableCell