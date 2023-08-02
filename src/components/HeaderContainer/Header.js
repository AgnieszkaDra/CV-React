import React from 'react'

import PropTypes from 'prop-types'

import MainProfile from '../MainProfile/MainProfile'
// import Contacts from '../Contacts/Contacts'

import classes from './styles.module.css'

export const Header = (props) => {
  const {
    className
  } = props

  const headerClass = classes[className]
  return (
    <header className={`${classes.root}${className ? ` ${headerClass}` : ''}`}>
      <MainProfile
        {...props.infoProfile}
        className={'mainProfile'}>
      </MainProfile>
      {/* <Contacts
        {...props.infoProfile.profileList}
        {...props.infoProfile.profileBasic}
        className={'contacts'}>
      </Contacts> */}
    </header>

  )
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h3', 'button']),
  infoProfile: PropTypes.object
}

export default Header
