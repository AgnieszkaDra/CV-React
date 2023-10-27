import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Link from '../Link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import classes from './styles.module.css'

export const Experience = (props) => {
  const {
    experienceList
  } = props

  const span = 3

  const renderListItem = (item, i) => {
    return (
      <ul className={classes.list}>
        <li
          className={`${classes.list__item}${classes.information}`}
          key={i}
        >
          <h3 className={`${classes.title} ${classes.experienceTitle}`}>{item.title}</h3>
          <div className={classes.date}>
            <Icon
              icon={faClock}
              className={`${classes.date__icon} icon`}
            >
            </Icon>
            <h4 className={classes.date__date}>{item.date}</h4>
          </div>
          {/* <div className={`${classes.icon} ${classes.globe}`}>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          </div>
          <Link
            key={i}
            values={`${item.companyLink}`}
            className={classes.link}
          >
          </Link> */}
        </li>
        <li
          className={`${classes.list__item}${classes.description}`}
          key={i}
        >
          <h4 className={classes.title}>{item.description}</h4>
          <Link
            values={item.companyLink}
            className={classes}
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
      {/* <div className={classes.headline}>
        <div
          className={`${classes.icon} ${classes.briefCase} icon`}
        >
          <FontAwesomeIcon icon={faBriefcase} ></FontAwesomeIcon>
        </div>
        <h4 className={`${classes.sectionTitle} ${classes.title}`}>EXPERIENCE AND EDUCATION</h4>
        <div className={classes.lineCont}>
          <hr className={classes.line}></hr>
        </div>
      </div> */}
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
