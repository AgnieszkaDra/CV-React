import React from 'react'

import classes from './styles.module.css'
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
          {/* <div className={classes.lineThird}>
            <div className={classes.lineThird__dots}>
              {spanElement(span)}
            </div>
          </div> */}
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
        {item.name}{item.level}
      </li>
    )
  }

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <h3 className={classes.item__title}>{frontendtechnologies.title}</h3>
        <ul className={classes.list}>
          {frontendtechnologies.list.map((item, i) => {
            return renderListFront(item, i)
          })}
        </ul>
      </div>
      <div className={classes.item}>
        <h3 className={classes.item__title}>{languages.title}</h3>
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
