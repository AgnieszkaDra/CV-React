import React from 'react'

import data from '../../data'
import Section from '../Section/Section'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import { faBriefcase, faCode, faFile } from '@fortawesome/free-solid-svg-icons'
import Enclosure from '../Enclosure'
import classes from './styles.module.scss'
import PropTypes from 'prop-types'

export const Main = (props) => {
  return (
    <main className={classes.main}>
      <Section
        content={<Experience {...props}></Experience>}
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
      <Section
        {...data}
        content={<Projects {...data.projects}></Projects>}
        title={'Projects'}
        icon={faCode}
      >
      </Section>
      <Section
        {...data}
        content={<Enclosure></Enclosure>}
        title={'Enclosure'}
        icon={faFile}
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
  experienceList: PropTypes.array,
  position: PropTypes.string,
  contactsList: PropTypes.object
}

export default Main
