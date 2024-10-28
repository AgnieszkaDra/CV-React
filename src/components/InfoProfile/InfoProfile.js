import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'
import '../../styles/base.css'

export const InfoProfile = ({ name, position }) => {
  const lineRefs = useRef(Array(3).fill().map(() => React.createRef()))

  return (
    <div className={classes.data}>
      <h3 className={classes.name}>{name}</h3>
      <h4 className={classes.position}>{position}</h4>
      <div className={classes.decoration}>
        {lineRefs.current.map((lineRef, index) => (
          <div
            key={index}
            ref={lineRef}
            className={`${classes.line} ${[`data__line-${index + 1}`]}`}
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
