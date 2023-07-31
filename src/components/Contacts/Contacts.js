import React from 'react'
import ContactsList from '../ContactsList/ContactsList'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Contacts = (props) => {
  const {
    className
  } = props
  const ulClass = classes[className]
  return (

    <div className={`${classes.root}${ulClass ? ` ${className}` : ''}`}>
      <ContactsList
        {...props}
        className={`${classes.root}${className ? ` ${className}` : ''}`}>
      </ContactsList>
    </div>

  )
}

Contacts.propTypes = {
  className: PropTypes.string
}

export default Contacts
