import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography/Typography'

import classes from './styles.module.css'
import { Link } from '../Link'

export const ContactsList = (props) => {
  const {
    className
  } = props

  const liClass = classes[className]

  const showObject = (el) => {
    return Object.entries(el).map(([key, values]) => {
      return (
        <Link
          key={'njnj'}
          values={`${values}`}
        >
        </Link>
      )
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
      <Typography
        className={classes.name}
        variant={'h1'}
        color={'black'}
      >
        { props.name }
      </Typography>
      <Typography
        className={classes.title}
        variant={'h2'}
        color={'white'}
      >
        { props.title }
      </Typography>
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
