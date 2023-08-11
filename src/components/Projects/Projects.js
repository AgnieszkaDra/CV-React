import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography/Typography'

import classes from './styles.module.css'

export const Projects = (props) => {
  const {
    description,
    categories
  } = props

  const renderList = (item) => {
    return (
      <>
        <div>{item.description}</div>
        <div>{item.title}</div>
        <div>{item.url}</div>
      </>
    )
  }

  const renderListItem = (item, i) => {
    return (

      <div className={'item'}>
        <h3 className={'job-title'}>{item.name}</h3>
        {renderList(item.list)}

      </div>
    )
  }

  return (

    <div className={`${classes.root}`} >
      <Typography
        className={'job-title'}
        variant={'h3'}
        color={'whitesmoke'}
      >
        { description }
      </Typography>
      {description}
      {categories.map((item, i) => {
        return renderListItem(item, i)
      })}
    </div>

  )
}

Projects.propTypes = {
  description: PropTypes.string,
  categories: PropTypes.array
}

export default Projects
