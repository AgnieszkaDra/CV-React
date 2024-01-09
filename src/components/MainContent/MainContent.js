import React from 'react'
import html2pdf from 'html2pdf.js'
import Header from '../Header/Header'
import Main from '../Main/Main'
import DownloadButton from '../DownloadButton'
import data from '../../data'

export default class MainContent extends React.Component {
  handleDownload = () => {
    const element = document.getElementById('content')
    const options = {
      margin: 10,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    html2pdf().from(element).set(options).save()
  }

  render () {
    return (
      <>
        <div
          className={'container'}
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
        <DownloadButton></DownloadButton>
        <button
          className={'button-download'}
          onClick={this.handleDownload}
        >
          Download as PDF
        </button>
      </>
    )
  }
}
