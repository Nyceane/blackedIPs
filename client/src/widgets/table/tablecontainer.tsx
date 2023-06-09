import React, { useContext } from 'react'
import classNames from 'classnames'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const TableContainer = React.forwardRef<HTMLDivElement, Props>(function TableContainer(props, ref) {
  const { className, children, ...other } = props

  const baseStyle = ""

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableContainer