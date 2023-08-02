import React from 'react'
import logo from '../assets/face.jpg'
import ContactsList from '../ContactsList/ContactsList'
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
      <div className={classes.imageContainer}><img className={mainProfilePhoto} src={logo} alt="" /></div>
      <ContactsList
        {...props.profileBasic}
        {...props.profileList}
        className={'contacts'}>
      </ContactsList>
    </div>
  )
}

MainProfile.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  profileBasic: PropTypes.object,
  profileList: PropTypes.object
}
export default MainProfile
