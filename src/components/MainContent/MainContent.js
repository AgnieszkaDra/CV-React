import React from 'react'

import Header from '../Header/Header'
import Main from '../Main/Main'
import DownloadPage from '../DownloadPage'

import data from '../../data'

export default class MainContent extends React.Component {
  render () {
    return (
      <>
        <div
          className={'container'}
        >
          <Header
            {...data.infoProfile}
          >
          </Header>
          <Main
            {...data}
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
}
