import React from 'react'

import './App.css'
import MainContent from './components/MainContent'
import PropTypes from 'prop-types'

export default class CV extends React.Component {
  render () {
    return (
      <MainContent />
    )
  }
}

CV.propTypes = {
  infoProfile: PropTypes.shape().isRequired
}
