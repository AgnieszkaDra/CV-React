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
    contactsList: PropTypes.array
  }).isRequired,
  experience: PropTypes.shape({
    experienceList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        company: PropTypes.string,
        companyName: PropTypes.string,
        description: PropTypes.string
      })
    )
  }),
  skills: PropTypes.shape({
    languages: PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.array
    }),
    technologies: PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.array
    })
  }),
  projects: PropTypes.shape({
    description: PropTypes.string,
    examples: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        list: PropTypes.shape({
          url: PropTypes.string,
          description: PropTypes.string
        })
      })
    )
  })
}
