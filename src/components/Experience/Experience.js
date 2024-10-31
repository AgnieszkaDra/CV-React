import React from 'react'
import Icon from '../Icon'
import Link from '../Link'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import classes from './styles.module.css'
import PropTypes from 'prop-types'

export const Experience = ({ experienceList }) => {
  const renderListItem = (item, i) => {
    return (
      <li
        className={`${classes.item}`}
        key={i}
      >
        <div>
          <h5 className={`${classes.h5}`}>{item.name}</h5>
          <div className={classes.date}>
            <div className={classes.icon}>
              <Icon
                icon={faClock}
              >
              </Icon>
            </div>
            <h6>{item.date}</h6>
          </div>
        </div>
        <div
          className={`${classes.list__item}`}
          key={i}
        >
          <h5 className={`${classes.h5}`}>{item.description}</h5>
          <h6 className={`${classes.h6} ${classes.cursive}`}>
            <Link
              values={item.companyLink}
            >
            </Link>
          </h6>
        </div>
      </li>
    )
  }
  return (
    <ul className={classes.list}>
      {experienceList.map((item, i) => {
        return renderListItem(item, i)
      })}
    </ul>
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
