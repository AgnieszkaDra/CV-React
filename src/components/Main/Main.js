import React from 'react'
import PropTypes from 'prop-types'
import data from '../../data'

import Section from '../Section/Section'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

import classes from './styles.module.css'

export const Main = (props) => {
  const {
    className
  } = props
  return (
    <main className={`${classes.root}${className ? ` ${className}` : ''}`}>
      <Section
        {...data}
        sectionTitle={'Work and Experience'}
      >
        <Experience {...data.experience}></Experience>
      </Section>
      <Section
        {...data}
        sectionTitle={'Skills'}
      >
        <Skills
          {...data.skills}
        >
        </Skills>
      </Section>
      <Section
        {...data}
        sectionTitle={'Projects'}
      >
        <Projects {...data.projects}></Projects>
      </Section>
    </main>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

export default Main
