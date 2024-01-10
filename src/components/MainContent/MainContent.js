import React from 'react'

import Header from '../Header/Header'
import Main from '../Main/Main'
import DownloadPage from '../DownloadPage'

import data from '../../data'

export default class MainContent extends React.Component {
  constructor (props) {
    super(props)
    // eslint-disable-next-line react/prop-types
    this.className = props.className
  }

  render () {
    return (
      <>
        <div
          className={`container ${this.className ? 'none' : ''}`}
          id={'content'}
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
