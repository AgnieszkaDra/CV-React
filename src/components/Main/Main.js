import React from 'react'

import data from '../../data'
import Section from '../Section/Section'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
// import Projects from '../Projects/Projects'
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons'

export const Main = () => {
  return (
    <main>
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

export default Main
