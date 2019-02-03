import React from 'react'
import classNames from 'classnames'
import './Panel.scss'

const Panel = ({children, dark}) => (
  <section 
    className={classNames(
      'Panel',
      { 'Panel-dark': dark }
    )}>
    {children}
  </section>
)

export default Panel

