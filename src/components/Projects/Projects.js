import React from 'react'
import PropTypes from 'prop-types'
// import Typography from '../Typography/Typography'

import classes from './styles.module.css'

export const Projects = (props) => {
  const {
    // description,
    categories
  } = props

  const renderList = (item) => {
    return (
      <div className={classes.list}>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.url}>{item.url}</div>
      </div>
    )
  }

  const renderListItem = (item, i) => {
    return (
      <div className={classes.item}>
        <h3 className={classes.title}>{item.name}</h3>
        {renderList(item.list)}
      </div>
    )
  }

  return (

    <div className={`${classes.root}`} >
      {/* <Typography
        className={classes.title}
        variant={'h4'}
        color={'whitesmoke'}
      >
        { description }
      </Typography> */}
      <div className={classes.container}>
        {categories.map((item, i) => {
          return renderListItem(item, i)
        })}
      </div>
    </div>

  )
}

Projects.propTypes = {
  description: PropTypes.string,
  categories: PropTypes.array
}

export default Projects
