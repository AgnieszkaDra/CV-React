import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const ContactsList = (props) => {
  const {
    className
  } = props

  const showObject = (el) => {
    return Object.entries(el).map(([key, values]) => {
      return <>{<span className={'space'}></span>}{<a href={`//${values}`} target='blank'> {values} </a>}</>
    })
  }

  const renderListItem = (item, i) => {
    return <li>{item[0]}{showObject(item[1])}</li>
  }

  return (

    <ul className={`${classes.root}${className ? ` ${className}` : ''}`}>
      {props.list.map((item, i) => {
        return renderListItem(item, i)
      })}
    </ul>
  )
}

ContactsList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array
}

export default ContactsList
