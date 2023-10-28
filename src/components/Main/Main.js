import React from 'react'
import PropTypes from 'prop-types'
import data from '../../data'

import Section from '../Section/Section'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
// import Projects from '../Projects/Projects'

import classes from './styles.module.css'
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons'

export const Main = () => {
  return (
    <main className={classes.main}>
      <Section
        {...data}
        content={<Experience {...data.experience}></Experience>}
        title={'Education and Experience'}
        icon={faBriefcase}
      >
      </Section>
      <Section
        {...data}
        content={<Skills {...data.skills}></Skills>}
        title={'Skills'}
        icon={faCode}
      >
      </Section>
      {/* <Section
        {...data}
        sectionTitle={'Projects'}
      >
        <Projects {...data.projects}></Projects>
      </Section> */}
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  classNameVariant: PropTypes.string
}

export default Main
