import React from 'react'
import Icon from '../Icon'
import { Link } from '../Link'

import classes from './styles.module.css'
import PropTypes from 'prop-types'

export const ContactsList = (props) => {
  const {
    className,
    list
  } = props

  const variantClass = classes[className]
  const renderListItem = (item, i) => {
    return (
      <li key={i}
        className={classes.list__element}>
        <>
          <Link values={item.data}
            className={classes.list__link}></Link>
          <Icon icon={item.icon}
           ></Icon>
        </>
      </li>
    )
  }

  return (
    <div className={`${variantClass ? ` ${variantClass}` : ''}`}>
      <ul className={classes.list} >
        {list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </ul>
    </div>
  )
}

ContactsList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array
}

export default ContactsList
