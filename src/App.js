import React from 'react'
// import html2pdf from 'html2pdf.js'
import './App.css'

import Header from './components/Header'
import Main from './components/Main/Main'
import data from './data'
import PropTypes from 'prop-types'

export default class CV extends React.Component {
  // handleDownload = () => {
  //   const element = document.getElementById('content')

  //   // Configuration options for html2pdf
  //   const options = {
  //     margin: 10,
  //     filename: 'document.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  //   }

  //   html2pdf().from(element).set(options).save()
  // }

  render () {
    return (
      <>
        <div id={'content'}>
          <div className={'container'}>
            <Header
              {...data.infoProfile}
            >
            </Header>
            <Main
              {...data}
            >
            </Main>
          </div>
        </div>
        {/* <button onClick={this.handleDownload}>Download as PDF</button> */}
      </>
    )
  };
}

CV.propTypes = {
  infoProfile: PropTypes.shape().isRequired
}
