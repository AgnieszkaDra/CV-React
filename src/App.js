import React from 'react'
import html2pdf from 'html2pdf.js'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainContent from './components/MainContent'
// import DownloadButton from './components/DownloadButton'
import DownloadPage from './components/DownloadPage'

import PropTypes from 'prop-types'

export default class CV extends React.Component {
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
        <Router>
          <Routes>
            <Route
              path={'/'}
              element={<MainContent />}
            />
            <Route
              path={'/download'}
              element={<DownloadPage />}
            />
          </Routes>
        </Router>
      </>
    )
  }
}

CV.propTypes = {
  infoProfile: PropTypes.shape().isRequired
}
