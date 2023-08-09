import React from 'react'
import PropTypes from 'prop-types'
import logo from './assets/face.jpg'
// import MainProfile from '../MainProfile/MainProfile'
import ContactsList from '../ContactsList/ContactsList'
import Description from '../Decription/Description'
import classes from './styles.module.css'

export const Header = (props) => {
  const {
    className
  } = props

  return (
    <header className={`${classes.root}${className ? ` ${className}` : ''}`}>
      <div
        className={classes.imageContainer}
      >
      </div>
      <img
        className={classes.mainProfilePhoto}
        src= {logo}
        alt={'Logo'}
      />
      <ContactsList
        {...props.profileBasic}
        {...props.profileList}
        className={'contacts'}
      >
      </ContactsList>
      <Description
        {...props.profileDescription}
      >
      </Description>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  profileBasic: PropTypes.object,
  profileList: PropTypes.object,
  profileDescription: PropTypes.object
}

export default Header
