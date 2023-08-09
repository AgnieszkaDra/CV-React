import React, { Children } from 'react'

import PropTypes from 'prop-types'
import Typography from '../Typography/Typography'

import classes from './styles.module.css'

export const Section = (props) => {
  const {
    className,
    sectionTitle,
    children
  } = props

  return (
    <section className={`section ${(className || ' ') && `${classes.root}`}`}>
      <Typography
        variant={'h2'}
        color={'black'}
        style={{ justifyContent: 'center' }}
      >
        { sectionTitle }
      </Typography>
      <div>
        {Children.map(children, child =>
          <div>
            {child}
          </div>
        )}
      </div>
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  sectionTitle: PropTypes.object,
  children: PropTypes.node
}

export default Section
