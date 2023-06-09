import React, { useContext } from 'react'
import classNames from 'classnames'

interface Props extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, Props>(function TableRow(props, ref) {
  const { className, children, ...other } = props

  const baseStyle = "py-3 px-5 border-b border-blue-gray-50"

  const cls = classNames(baseStyle, className)

  return (
    <tr className={cls} ref={ref} {...other}>
      {children}
    </tr>
  )
})

export default TableRow