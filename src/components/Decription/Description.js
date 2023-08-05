import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const Description = (props) => {
  return (
    <>
    <h3 className={classes.h3}>{props.sectionTitle}</h3>
    <p className={classes.p}>{props.description}</p>
    </>
  )
}

Description.propTypes = {
  description: PropTypes.string,
  sectionTitle: PropTypes.string
}

export default Description
