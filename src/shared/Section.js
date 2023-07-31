import React, { Children } from 'react'

import PropTypes from 'prop-types'

import classes from './styles.module.css'

const Section = (props) => {
  const {
    className,
    sectionTitle,
    children
  } = props

  return (
    <section className={`section ${(className || ' ') && `${classes.root}`}`}>
      <h2>
        {sectionTitle}
        <div>
          {Children.map(children, child =>
            <div>
              {child}
            </div>
          )}
        </div>
      </h2>
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  sectionTitle: PropTypes.object,
  children: PropTypes.node
}

export default Section
