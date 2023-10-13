import React from 'react'
import PropTypes from 'prop-types'

// import MainProfile from '../MainProfile/MainProfile'
import Section from '../Section/Section'
import Avatar from './Avatar'
import ContactsList from '../ContactsList/ContactsList'
import Description from '../Description/Description'
import classes from './styles.module.css'

export const Header = (props) => {
  const {
    classNameVariant
  } = props

  return (
    <header className={`${classes.header}${classNameVariant ? ` ${classNameVariant}` : ''}`}>
      <Section
        classNameVariant={'avatarContainer'}
        content={<Avatar className={'mainProfilePhoto'}></Avatar>}
      >
      </Section>
      <Section
        classNameVariant={'infoContainer'}
        content={
          <>
            <Description
              {...props.profileDescription}
              className = {'basicData'}
            >
            </Description>
            <ContactsList
              {...props.profileBasic}
              {...props.profileList}
              className={'contacts'}
            >
            </ContactsList>

          </>}
      >
      </Section>
    </header>
  )
}

Header.propTypes = {
  classNameVariant: PropTypes.string,
  profileBasic: PropTypes.object,
  profileList: PropTypes.object,
  profileDescription: PropTypes.object
}

export default Header
