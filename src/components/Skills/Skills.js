import React from 'react'

import classes from './styles.module.scss'
import PropTypes from 'prop-types'

export const Skills = (props) => {
  const {
    frontendtechnologies,
    languages
  } = props

  const renderListFront = (item, i) => {
    return (
      <>
        <li
          key={i}
          className={classes.list__item}
        >
          {item}{item.level}
        </li>
      </>
    )
  }
  const renderListLanguages = (item, i) => {
    return (
      <li
        key={i}
        className={classes.list__item}
      >
        {item.name} - {item.level}
      </li>
    )
  }

  return (
    <div className={classes.container}>
      <div>
        <h6 className={classes.title}>{frontendtechnologies.title}</h6>
        <ul className={classes.list}>
          {frontendtechnologies.list.map((item, i) => {
            return renderListFront(item, i)
          })}
        </ul>
      </div>
      <div>
        <h6 className={classes.title}>{languages.title}</h6>
        <ul className={classes.list}>
          {languages.list.map((item, i) => {
            return renderListLanguages(item, i)
          })}
        </ul>
      </div>
    </div>
  )
}

Skills.propTypes = {
  frontendtechnologies: PropTypes.array,
  languages: PropTypes.object
}

export default Skills
