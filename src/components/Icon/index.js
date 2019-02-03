import React from 'react'
import Hamburger from '../../img/Hamburger.svg'

const Svgs = {
  Hamburger
}

const Icon = ({type}) => {
  const IconType = Svgs[type]
  return (
    <IconType />
  )
}

export default Icon