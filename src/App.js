import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
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
        <Main
          {...experience}
          {...skills}
          {...projects}
        >
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
  infoProfile: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    contactsList: PropTypes.object
  }).isRequired,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      role: PropTypes.string
      // Add other properties as necessary
    })
  ).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
      // Add other properties as necessary
    })
  ).isRequired
}
