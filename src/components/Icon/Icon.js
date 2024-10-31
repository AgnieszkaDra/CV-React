import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

export const Icon = ({ icon }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
    >
    </FontAwesomeIcon>
  )
}

Icon.propTypes = {
  icon: PropTypes.object
}

export default Icon
