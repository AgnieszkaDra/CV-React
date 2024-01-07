import React from 'react'

import Avatar from './Avatar'
import ContactsList from '../ContactsList/ContactsList'
import Description from '../Description/Description'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const Header = (props) => {
  return (
    <header className={classes.header}>
      <Avatar className={classes.header__photo}></Avatar>
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
