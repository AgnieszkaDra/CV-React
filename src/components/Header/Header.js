import React from 'react'
import ContactsList from '../ContactsList/ContactsList'
import Description from '../Description/Description'
import PropTypes from 'prop-types'
import classes from './styles.module.scss'

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__info}>
        <Description
          {...props.profileDescription}
        >
        </Description>
        <ContactsList
          {...props.profileBasic}
          {...props.profileList}
        >
        </ContactsList>
      </div>
    </header>
  )
}

Header.propTypes = {
  profileBasic: PropTypes.object,
  profileList: PropTypes.object,
  profileDescription: PropTypes.object
}

export default Header
