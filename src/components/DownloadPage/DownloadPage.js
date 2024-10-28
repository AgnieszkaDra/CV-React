import React from 'react'
import classes from './styles.module.scss'
import html2pdf from 'html2pdf.js'

const handleDownload = () => {
  alert('fjdnfjd')
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

export const DownloadPage = () => {
  return (
    <div className={classes.root}>
      <button
        className={classes.button}
        onClick={handleDownload}
      >
        Download CV
      </button>
    </div>
  )
}

export default DownloadPage
