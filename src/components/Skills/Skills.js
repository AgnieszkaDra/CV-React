import React from 'react'
import PropTypes from 'prop-types'

export const Skills = (props) => {
  const {
    frontendtechnologies,
    languages
  } = props

  const renderListFront = (item, i) => {
    return (
      <li key={i}>
        {item}{item.level}
      </li>
    )
  }
  const renderListLanguages = (item, i) => {
    return (
      <li key={i}>
        {item.name}{item.level}
      </li>
    )
  }

  return (
    <>
      <ul>
        {frontendtechnologies.map((item, i) => {
          return renderListFront(item, i)
        })}
      </ul>
      <ul>
        {languages.list.map((item, i) => {
          return renderListLanguages(item, i)
        })}
      </ul>
    </>
  )
}

Skills.propTypes = {
  frontendtechnologies: PropTypes.array,
  languages: PropTypes.object
}

export default Skills
