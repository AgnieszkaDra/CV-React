import React from 'react'
import ContactsList from '../ContactsList/ContactsList'
import InfoProfile from '../InfoProfile/InfoProfile'
import PropTypes from 'prop-types'
import classes from './styles.module.scss'

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__info}>
        <InfoProfile {...props}/>
        <ContactsList
          {...props}
        >
        </ContactsList>
      </div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  contactsList: PropTypes.object
}

export default Header
