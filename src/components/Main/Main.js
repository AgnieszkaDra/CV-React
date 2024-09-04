import React from 'react'
import classes from './styles.module.scss'
import PropTypes from 'prop-types'

export const Main = ({ children }) => {
  return (
    <main className={classes.main}>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.object
}

export default Main
