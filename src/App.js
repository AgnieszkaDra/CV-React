import React from 'react'

import Header from './components/HeaderContainer/Header'
import Main from './components/Main/Main'
import './styles/index.css'
import data from './data'
import PropTypes from 'prop-types'

export default class CV extends React.Component {
  render () {
    return (
      <>
        <Header
            {...data.infoProfile}
            className={'header'}
        >
        </Header>
        <Main {...data}></Main>
      </>
    )
  };
}

CV.propTypes = {
  infoProfile: PropTypes.shape().isRequired
}
