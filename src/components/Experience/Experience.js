import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import classes from './styles.module.css'

export const Experience = (props) => {
  const {
    experienceList
  } = props

  const span = 3

  const renderListItem = (item, i) => {
    return (
      <ul className={`${classes.list} padding-37`}>
        <li
          className={classes.list__item}
          key={i}>
          <h3 className={`${classes.title} ${classes.experienceTitle}`}>{item.title}</h3>
          <div className={`${classes.icon} ${classes.globe}`}>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          </div>
          <Link
            key={i}
            values={`${item.companyLink}`}
            className={classes.link}
          >
          </Link>
        </li>
      </ul>
    )
  }

  const spanElement = (spanElement) => {
    const numberOfElements = spanElement
    const elements = []

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(
        <span
          key={i}
          className={classes.dot}
        >
        </span>)
    }
    return (
      <>
        {elements}
      </>
    )
  }
  return (
    <>
      <div className={classes.headline}>
        <div
          className={`${classes.icon} ${classes.briefCase}`}
        >
          <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
        </div>
        <h4 className={`${classes.sectionTitle} ${classes.title}`}>EXPERIENCE AND EDUCATION</h4>
        <div className={classes.lineCont}>
          <hr className={classes.line}></hr>
        </div>
      </div>
      <hr className={classes.lineSecond}></hr>
      <div className={classes.container}>
        <div className={classes.lineThird}>
          <div className={classes.lineThird__dots}>
            {spanElement(span)}
          </div>
        </div>
        {experienceList.map((item, i) => {
          return renderListItem(item, i)
        })}
      </div>
    </>
  )
}

Experience.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  experienceList: PropTypes.array
}

export default Experience
