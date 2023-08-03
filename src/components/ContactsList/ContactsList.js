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
      return <>
        <a
          href={`//${values}`}
          target={'blank'}
          className={'font-main'}
        >
          {values}
        </a>
      </>
    })
  }

  const renderListItem = (item, i) => {
    return <li className={`${liClass ? `${liClass}` : ''}`}><span className={'font-contrast'}>{item[0]}</span>{showObject(item[1])}</li>
  }

  return (
    <>
      <ul className={classes.list}>
        {props.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </ul>
      <div className={classes.name + ' font-contrast'}>{ props.name } </div>
      <br></br>
      <div className={classes.title + ' font-main'}>{props.title}</div>
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
