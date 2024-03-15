import React from 'react'
import Icon from '../Icon'
import { Link } from '../Link'

import classes from './styles.module.scss'
import PropTypes from 'prop-types'

export const ContactsList = (props) => {
  const {
    list
  } = props

  const renderListItem = (item, i) => {
    return (
      <li
        key={i}
        className={classes.list__element}
      >
        <>
          <Link
            className={classes.list__link}
            values={item.data}
          >
          </Link>
          <Icon
            icon={item.icon}
          >
          </Icon>
        </>
      </li>
    )
  }

  return (
    <div className={classes.contacts}>
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
