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

  const renderListItem = (item, i) => {
    return (
      <ul className={classes.list}>
        <li
          className={classes.listItem}
          key={i}>
          <h3 className={classes.title}>{item.title}</h3>
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          <Link
            key={i}
            values={`${item.companyLink}`}
          >
          </Link>
        </li>
      </ul>
    )
  }
  return (
    <>
      <div className={classes.headline}>
        <div
          className={classes.icon}
        >
          <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
        </div>
        <h4 className={classes.title}>EXPERIENCE</h4>
        <div className={classes.line}></div>
        <div className={classes.lineSecond}></div>
      </div>
      {experienceList.map((item, i) => {
        return renderListItem(item, i)
      })}
    </>
  )
}

Experience.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  experienceList: PropTypes.array
}

export default Experience
