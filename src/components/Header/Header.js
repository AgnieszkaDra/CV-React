import React from 'react'
import ContactsList from '../ContactsList/ContactsList'
import InfoProfile from '../InfoProfile/InfoProfile'
import classes from './styles.module.css'
import PropTypes from 'prop-types'

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <InfoProfile
        {...props}
      />
      <ContactsList
        {...props}
      >
      </ContactsList>
    </header>
  )
}

Header.propTypes = {
  infoProfile: PropTypes.object
}

export default Header
