import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'
// import Typography from '../Typography/Typography'

import classes from './styles.module.scss'

export const Projects = (props) => {
  const {
    examples
  } = props

  const renderList = (item) => {
    return (
      <div className={classes.list}>
        <div className={classes.description}>{item.description}</div>
        <Link
          className={classes.url}
          values={item.url}
        >
        </Link>
      </div>
    )
  }

  const renderListItem = (item) => {
    return (
      <div className={classes.item}>
        <h3 className={classes.title}>{item.title}</h3>
        {renderList(item.list)}
      </div>
    )
  }

  return (

    <div className={`${classes.root}`} >
      <div className={classes.container}>
        {examples.map((item, i) => {
          return renderListItem(item, i)
        })}
      </div>
    </div>

  )
}

Projects.propTypes = {
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.shape({
        url: PropTypes.string,
        description: PropTypes.string
      })
    })
  )
}

export default Projects
