import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Section = (props) => {
  const {
    classNameSecond,
    content
  } = props

  const variantClass = classes[classNameSecond]

  return (
    <section
      className={`${variantClass ? ` ${variantClass}` : ''}`}
    >
      {content}
    </section>
  )
}

Section.propTypes = {
  classNameSecond: PropTypes.string,
  content: PropTypes.string
}

export default Section
