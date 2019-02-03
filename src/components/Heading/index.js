import React from 'react'
import './Heading.scss'

const Heading = ({level, children}) => {
  const Element = `h${level}`
  return (
    <Element className="Heading">{children}</Element>
  )
}

export default Heading