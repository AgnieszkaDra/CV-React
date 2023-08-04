import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const Description = (props) => {
  return (
    <p className={classes.p}>{props.sectionTitle}{props.description}</p>
  )
}

Description.propTypes = {
  description: PropTypes.string,
  sectionTitle: PropTypes.string
}

export default Description
