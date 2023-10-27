import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Description = (props) => {
  const {
    name,
    position
  } = props
  return (
    <div className={classes.data}>
      <h3 className={classes.data__name}>{name}</h3>
      <h4 className={classes.data__position}>{position}</h4>
      <hr className={classes.data__hr}></hr>
    </div>
  )
}

Description.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
}

export default Description
