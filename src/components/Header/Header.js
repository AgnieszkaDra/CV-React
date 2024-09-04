import React from 'react'
import ContactsList from '../ContactsList/ContactsList'
import InfoProfile from '../InfoProfile/InfoProfile'
import classes from './styles.module.scss'
import PropTypes from 'prop-types'

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__info}>
        <InfoProfile
          {...props}
        />
        <ContactsList
          {...props}
        >
        </ContactsList>
      </div>
    </header>
  )
}

Header.propTypes = {
  infoProfile: PropTypes.object
}

export default Header
