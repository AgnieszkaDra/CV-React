import React from 'react'
import PropTypes from 'prop-types'

// import MainProfile from '../MainProfile/MainProfile'
import Section from '../Section/Section'
import Avatar from './Avatar'
import ContactsList from '../ContactsList/ContactsList'
import Description from '../Decription/Description'
import classes from './styles.module.css'

export const Header = (props) => {
  const {
    className
  } = props

  return (
    <header className={`${classes.header}${className ? ` ${className}` : ''}`}>
      <Section
        className={'avatarContainer'}
        content= {<Avatar className={'mainProfilePhoto'}></Avatar>}
        >
    </Section>

      <section>
        <ContactsList
          {...props.profileBasic}
          {...props.profileList}
          className={'contacts'}
        >
        </ContactsList>
        <Description
          {...props.profileDescription}
        >
        </Description>
      </section>

    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  profileBasic: PropTypes.object,
  profileList: PropTypes.object,
  profileDescription: PropTypes.object
}

export default Header
