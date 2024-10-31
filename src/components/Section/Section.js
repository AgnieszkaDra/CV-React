import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './styles.module.css'
import PropTypes from 'prop-types'

export const Section = ({ title, icon, content }) => {
  return (
    <section
      className={classes.section}
    >
      <div className={classes.headline}>
        <div
          className={`${classes.icon} ${'border-round'}`}
        >
          <FontAwesomeIcon
            icon={icon}
          >
          </FontAwesomeIcon>
        </div>
        <h4 className={classes.title}>{title}</h4>
        <div className={classes.lineContainer}>
          <hr className={classes.line}></hr>
        </div>
      </div>
      {content}
    </section>
  )
}

Section.propTypes = {
  content: PropTypes.object,
  icon: PropTypes.object,
  title: PropTypes.string
}

export default Section
