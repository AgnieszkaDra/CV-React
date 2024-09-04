import React from 'react'
import Icon from '../Icon'
import Link from '../Link'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import classes from './styles.module.scss'
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
          <h6 className={`${classes.list__item__title}`}>{item.name}</h6>
          <div className={classes.date}>
            <Icon
              icon={faClock}
              className={classes.date__icon}
            >
            </Icon>
            <h5 className={classes.date__time}>{item.date}</h5>
          </div>
        </li>
        <div
          className={`${classes.list__item}`}
          key={i}
        >
          <h6 className={classes.list__item__title}>{item.description}</h6>
          <Link
            values={item.companyLink}
          >
          </Link>
        </div>
      </ul>
    )
  }
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
  experienceList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      companyLink: PropTypes.string,
      description: PropTypes.string
    })
  )
}

export default Experience
