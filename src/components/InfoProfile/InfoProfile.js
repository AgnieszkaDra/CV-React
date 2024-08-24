import React from 'react'

import classes from './styles.module.scss'
import PropTypes from 'prop-types'

export const InfoProfile = (props) => {
  const {
    name,
    position
  } = props
  return (
    <div className={classes.data}>
      <h3 className={classes.data__name}>{name}</h3>
      <h4 className={classes.data__position}>{position}</h4>
      <div className={`${classes.data__line_up} ${classes.data__line}`}></div>
      <div className={`${classes.data__line_center} ${classes.data__line}`}></div>
      <div className={`${classes.data__line_down} ${classes.data__line}`}></div>
    </div>
  )
}

InfoProfile.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string
}

export default InfoProfile
