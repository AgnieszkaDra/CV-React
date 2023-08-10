import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography/Typography'
import classes from './styles.module.css'

export const Description = (props) => {
  return (
    <>
      <div
        className={classes.imageContainer}
      >
      </div>
      <Typography
        className={classes.title}
        variant={'h3'}
      >
        { props.sectionTitle }
      </Typography>
      <Typography
        className={classes.paragraph}
        variant={'p'}
      >
        { props.description }
      </Typography>
    </>
  )
}

Description.propTypes = {
  description: PropTypes.string,
  sectionTitle: PropTypes.string
}

export default Description
