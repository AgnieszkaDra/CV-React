import React from 'react'
import logo from '../assets/face.jpg'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const MainProfile = (props) => {
  const {
    className
  } = props

  const mainProfileClass = classes[className]
  const mainProfilePhoto = `${classes[className + 'photo']}`
  return (

    <div className={`${classes.root}${className ? ` ${mainProfileClass}` : ''}`}>
      <img className={mainProfilePhoto} src={logo} alt="" />
      <h1 className={'name'}>{props.name}</h1>
      <h3 className={'tagname'}>{props.title}</h3>
    </div>

  )
}

MainProfile.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string
}
export default MainProfile
