import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './styles.module.scss'
import PropTypes from 'prop-types'

export const Icon = (props) => {
  const {
    icon
  } = props

  return (
    <FontAwesomeIcon
      icon={icon}
      className={classes.icon}
    >
    </FontAwesomeIcon>
  )
}

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon
