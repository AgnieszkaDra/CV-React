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

    <div className={`${classes.root}${className ? ` ${ulClass}` : ''}`}>
      <ContactsList
        {...props}
        className={'listItem'}>
      </ContactsList>
    </div>

  )
}

Contacts.propTypes = {
  className: PropTypes.string,
  profileList: PropTypes.object
}

export default Contacts
