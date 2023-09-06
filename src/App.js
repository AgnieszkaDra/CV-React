import React from 'react'
import './App.css'

import Header from './components/HeaderContainer/Header'
import Main from './components/Main/Main'
import './styles/index.scss'
import data from './data'
import PropTypes from 'prop-types'

export default class CV extends React.Component {
  render () {
    return (
      <div className={'container'}>
        <Header
          {...data.infoProfile}
          className={'header'}
        >
        </Header>
        <Main {...data}></Main>
      </div>
    )
  };
}

CV.propTypes = {
  infoProfile: PropTypes.shape().isRequired
}
