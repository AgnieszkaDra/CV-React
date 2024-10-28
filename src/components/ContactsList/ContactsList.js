import React from 'react'
import Icon from '../Icon'
import { Link } from '../Link'
import classes from './styles.module.scss'
import PropTypes from 'prop-types'

export const ContactsList = ({ contactsList }) => {
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
            className={classes.icon}
          >
          </Icon>
        </>
      </li>
    )
  }

  return (
    <div className={classes.contacts}>
      <ul className={classes.list} >
        {contactsList.map((item, i) => {
          return renderListItem(item, i)
        })}
      </ul>
    </div>
  )
}

ContactsList.propTypes = {
  contactsList: PropTypes.array
}

export default ContactsList
