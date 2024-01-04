import React from 'react'
import Icon from '../Icon'
import Link from '../Link'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import classes from './styles.module.css'
import PropTypes from 'prop-types'

export const Experience = (props) => {
  const {
    experienceList
  } = props

  const renderListItem = (item, i) => {
    return (
      <ul className={classes.list}>
        <li
          className={`${classes.list__item}`}
          key={i}
        >
          <h3 className={`${classes.title}`}>{item.title}</h3>
          <div className={classes.date}>
            <Icon
              icon={faClock}
              className={`${classes.date__icon} icon`}
            >
            </Icon>
            <h4 className={classes.date__date}>{item.date}</h4>
          </div>
        </li>
        <div
          className={`${classes.list__item}`}
          key={i}
        >
          <h4 className={classes.title}>{item.description}</h4>
          <Link
            values={item.companyLink}
            className={classes}
          >
          </Link>
        </div>
      </ul>
    )
  }

  // const spanElement = (spanElement) => {
  //   const numberOfElements = spanElement
  //   const elements = []

  //   for (let i = 1; i <= numberOfElements; i++) {
  //     elements.push(
  //       <span
  //         key={i}
  //         className={classes.dot}
  //       >
  //       </span>)
  //   }
  //   return (
  //     <>
  //       {elements}
  //     </>
  //   )
  // }
  return (
    <>
      <div className={classes.container}>
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
