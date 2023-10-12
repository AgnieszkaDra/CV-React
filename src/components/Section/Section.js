import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Section = (props) => {
  const {
    className,
    content
  } = props

  return (
    <section
      className={`${classes.root}${className ? ` ${classes.avatarContainer}` : ''}`}
    >
      {content}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string
}

export default Section
