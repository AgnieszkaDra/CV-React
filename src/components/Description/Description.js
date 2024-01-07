import React from 'react'

import classes from './styles.module.css'
import PropTypes from 'prop-types'

export const Description = (props) => {
  const {
    name,
    position
  } = props
  return (
    <div className={classes.data}>
      <h3 className={classes.data__name}>{name}</h3>
      <h4 className={classes.data__position}>{position}</h4>
      <hr className={`${classes.data__hr_up} ${classes.data__hr}`}></hr>
      <hr className={`${classes.data__hr_center} ${classes.data__hr}`}></hr>
      <hr className={`${classes.data__hr_down} ${classes.data__hr}`}></hr>
    </div>
  )
}

Description.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
}

export default Description
