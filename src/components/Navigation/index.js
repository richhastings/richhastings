import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import { Link } from 'gatsby'
import './Navigation.scss'

const links = [
  {
    label: 'Home',
    url: '/'
  }, {
    label: 'About',
    url: '/about'
  }, {
    label: 'Blog',
    url: '/blog'
  }, {
    label: 'Contact',
    url: '/contact'
  }
]

const NavigationLink = ({url, label, pathname, toggleNav}) => {           
  if (url === pathname) {
    return <button className="NavigationLink" onClick={toggleNav}>{label}</button>
  } else {
    return <Link className="NavigationLink" to={url}>{label}</Link>
  }
}

class NavComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
    <nav
      className={classNames(
        'Navigation',
        { 'isOpen': this.state.isOpen }
      )}
      role="navigation"
      aria-label="main-navigation"
    >
      <button className="toggle" onClick={this.toggleNav}>
        <Icon type="Hamburger" />
      </button>
      <div className="inner">
        {this.state.isOpen &&
          links.map(link => (   
            <NavigationLink
              {...link}
              toggleNav={this.toggleNav}
              pathname={this.props.pathname}
            />
          ))
        }   
      </div>
    </nav>
  )}
}

export default NavComponent
