import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Description = (props) => {
  const {
    className,
    name,
    position

  } = props

  const variantClass = classes[className]
  return (
    <div className={`${variantClass ? ` ${variantClass}` : ''}`}>
      <h3 className={classes.name}>{name}</h3>
      <h4 className={classes.position}>{position}</h4>
      <hr className={classes.line}></hr>
    </div>
  )
}

Description.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
}

export default Description
