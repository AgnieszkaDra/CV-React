import React from 'react'
import logo from './assets/face.jpg'
import classes from './styles.module.css'
import PropTypes from 'prop-types'

export const Avatar = (props) => {
  const {
    className
  } = props
  return (
    <img
      className={`${className ? ` ${classes.mainProfilePhoto}` : ''}`}
      src={logo}
      alt={'Logo'}
    />
  )
}

Avatar.propTypes = {
  className: PropTypes.string
}

export default Avatar
