import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Section = (props) => {
  const {
    classNameVariant,
    content,
    sectionTitle
  } = props

  const variantClass = classes[classNameVariant]

  return (
    <section
      className={`${variantClass ? ` ${variantClass}` : ''}`}
    >
      {sectionTitle && <h4>{sectionTitle}</h4>}
      {content}
    </section>
  )
}

Section.propTypes = {
  classNameVariant: PropTypes.string,
  content: PropTypes.string,
  sectionTitle: PropTypes.string
}

export default Section
