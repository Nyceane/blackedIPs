import React, { useContext } from 'react'
import classNames from 'classnames'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const TableFooter = React.forwardRef<HTMLDivElement, Props>(function TableFooter(props, ref) {
  const { className, children, ...other } = props

  const baseStyle = ""

  const cls = classNames(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default TableFooter