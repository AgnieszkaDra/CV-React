import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Skills = (props) => {
  const {
    frontendtechnologies,
    languages
  } = props

  const span = frontendtechnologies.list.length

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

  const renderListFront = (item, i) => {
    return (
      <>
        <li
          key={i}
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
      >
        {item.name}{item.level}
      </li>
    )
  }

  return (
    <div className={classes.skills}>
      <ul>
        <div className={classes.container}>
          <div className={classes.lineThird}>
            <div className={classes.lineThird__dots}>
              {spanElement(span)}
            </div>
          </div>
        </div>
        <h3>{frontendtechnologies.title}</h3>
        {frontendtechnologies.list.map((item, i) => {
          return renderListFront(item, i)
        })}
      </ul>
      <ul>
        <h3>{languages.title}</h3>
        {languages.list.map((item, i) => {
          return renderListLanguages(item, i)
        })}
      </ul>
    </div>
  )
}

Skills.propTypes = {
  frontendtechnologies: PropTypes.array,
  languages: PropTypes.object
}

export default Skills
