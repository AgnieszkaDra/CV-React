import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const ContactsList = (props) => {
  const {
    className
  } = props

  const liClass = classes[className]

  const showObject = (el) => {
    return Object.entries(el).map(([key, values]) => {
      return <>{<a href={`//${values}`} target='blank'> {values} </a>}</>
    })
  }

  const renderListItem = (item, i) => {
    return <span className={`${liClass ? `${liClass}` : ''}`}>{item[0]}{showObject(item[1])}</span>
  }

  return (
    <>
      <span className={classes.list}>
        {props.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </span>
      <div className={`${classes.name} namehj`} > { props.name } </div>
      <span className={classes.title}>{props.title}</span>
    </>

  )
}

ContactsList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  title: PropTypes.string
}

export default ContactsList
