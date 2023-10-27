import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* eslint-disable */
import { faBriefcase, faClock, faCode} from '@fortawesome/free-solid-svg-icons' 
/* eslint-disable */
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Section = (props) => {
  const {
    title,
    icon,
    content
  } = props
  return (
    <section
      className={classes.section}
    >
      <div className={classes.headline}>
        <div
          className={`icon border-round`}
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
  classNameVariant: PropTypes.string,
  content: PropTypes.string,
  sectionTitle: PropTypes.string,
  icon: PropTypes.oneOf(['red', 'green', 'blue', 'yellow']),
  title: PropTypes.string
}

export default Section
