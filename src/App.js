import React from 'react'

import Header from './components/HeaderContainer/Header'
import Main from './components/Main/Main'

import data from './data'
import PropTypes from 'prop-types'

export default class CV extends React.Component {
  render () {
    return (
      <>
        <div className={'container'}>
          <Header
            {...data}
            className={'header'}></Header>
          <Main {...data}></Main>
        </div>
      </>
    )
  };
}

CV.propTypes = {
  infoProfile: PropTypes.shape().isRequired,
  experience: PropTypes.shape().isRequired,
  skills: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired
}
