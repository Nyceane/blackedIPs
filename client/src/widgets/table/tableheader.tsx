import React, { useContext } from 'react'
import classNames from 'classnames'

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, Props>(function TableHeader(
  props,
  ref
) {
  const { className, children, ...other } = props

  const baseStyle = ""

  const cls = classNames(baseStyle, className)

  return (
    <thead className={cls} ref={ref} {...other}>
      {children}
    </thead>
  )
})

export default TableHeader