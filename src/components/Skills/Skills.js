import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Skills = (props) => {
  const {
    frontendtechnologies,
    languages
  } = props

  // const span = 1

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
      <div>
        <h3 className={classes.headline}>{frontendtechnologies.title}</h3>
        <ul className={classes.list}>
          {frontendtechnologies.list.map((item, i) => {
            return renderListFront(item, i)
          })}
        </ul>
      </div>
      <div>
        <h3 className={classes.headline}>{languages.title}</h3>
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
