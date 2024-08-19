import React from 'react'
import MainContent from './components/MainContent'
import './App.css'
import PropTypes from 'prop-types'

const CV = () => {
  return (
    <MainContent />
  )
}

export default CV

CV.propTypes = {
  infoProfile: PropTypes.shape().isRequired,
  experience: PropTypes.shape().isRequired,
  skills: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired
}
