import React from 'react'

import { Link } from 'react-router-dom'

export const DownloadButton = () => {
  return (
    <Link to={'/download'}>
      <button>Go to Subpage</button>
    </Link>
  )
}

export default DownloadButton
