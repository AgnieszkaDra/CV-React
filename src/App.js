import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Section from './components/Section/Section'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Enclosure from './components/Enclosure'
// import Experience from './components/Experience/Experience'
import { faBriefcase, faCode, faFile } from '@fortawesome/free-solid-svg-icons'
import DownloadPage from './components/DownloadPage'
import './App.css'
import PropTypes from 'prop-types'

const CV = ({ infoProfile, experience, skills, projects }) => {
  return (
    <>
      <div
        className={'container'}
      >
        <Header
          {...infoProfile}
        >
        </Header>
        <Main>
          <Section
            content={<Experience {...experience}></Experience>}
            title={'Education and Experience'}
            icon={faBriefcase}
          >
          </Section>
          <Section
            content={<Skills {...skills}></Skills>}
            title={'Skills'}
            icon={faCode}
          >
          </Section>
          <Section
            content={<Projects {...projects}></Projects>}
            title={'Projects'}
            icon={faCode}
          >
          </Section>
          <Section
            content={<Enclosure></Enclosure>}
            title={'Enclosure'}
            icon={faFile}
          >
          </Section>
        </Main>
      </div>
      <h3
        className={'headline-mobile'}
      >The CV is visible only on tablet and desktop version.
      </h3>
      <DownloadPage></DownloadPage>
    </>
  )
}

export default CV

CV.propTypes = {
  infoProfile: PropTypes.object,
  experience: PropTypes.object,
  skills: PropTypes.object,
  projects: PropTypes.object
}
