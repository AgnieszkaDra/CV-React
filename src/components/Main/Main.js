import React from 'react'

import data from '../../data'
import Section from '../Section/Section'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import { faBriefcase, faCode, faFile } from '@fortawesome/free-solid-svg-icons'
import Enclosure from '../Enclosure'
import classes from './styles.module.scss'

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

export default Main
