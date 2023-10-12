import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Description = (props) => {

  const {
    name,
    position

  } = props
  return (
    <>
      {/* <div
        className={classes.imageContainer}
      >
      </div> */}
      <h3 className={classes.name}>{name}</h3>
      <h4 className={classes.position}>{position}</h4>
    </>
  )
}

Description.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string
}

export default Description
