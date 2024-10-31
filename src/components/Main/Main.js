import React from 'react'
import PropTypes from 'prop-types'

export const Main = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.array
}

export default Main
