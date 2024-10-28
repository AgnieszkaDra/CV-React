import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.scss'

export const InfoProfile = ({ name, position }) => {
  const lineRefs = useRef(Array(3).fill().map(() => React.createRef()))

  useEffect(() => {
    const startingWidth = 100

    lineRefs.current.forEach((lineRef, index) => {
      if (lineRef.current) {
        lineRef.current.style.width = `${startingWidth - index * 10}px`
        lineRef.current.style.marginLeft = 'auto'
        lineRef.current.style.marginRight = 'auto'
        lineRef.current.style.marginBottom = '10px'
      }
    })
  }, [])

  return (
    <div className={classes.data}>
      <h3 className={classes.data__name}>{name}</h3>
      <h4 className={classes.data__position}>{position}</h4>
      <div className={classes.data__decoration}>
        {lineRefs.current.map((lineRef, index) => (
          <div
            key={index}
            ref={lineRef}
            className={classes.data__line}
          />
        ))}
      </div>
    </div>
  )
}

InfoProfile.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string
}

export default InfoProfile
