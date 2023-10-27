import React from 'react'
import logo from './assets/face.jpg'
import classes from './styles.module.css'
import PropTypes from 'prop-types'

export const Avatar = (props) => {
  const {
    className
  } = props
  return (
    <div className={className}>
      <img
        className={classes.img}
        src={logo}
        alt={'Logo'}
      />
    </div>
  )
}

Avatar.propTypes = {
  className: PropTypes.string
}

export default Avatar
