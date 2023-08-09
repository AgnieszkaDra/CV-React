import React from 'react'
import data from '../../data'

import Section from '../shared/Section'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

export const Main = () => {
  return (
    <main>
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

export default Main
