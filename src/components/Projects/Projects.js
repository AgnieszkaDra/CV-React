import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'
import classes from './styles.module.css'

export const Projects = ({ examples }) => {
  const renderListItem = (item) => {
    return (
      <li className={classes.item}>
        <h3 className={classes.title}>{item.title}</h3>
        <div className={classes.description}>{item.description}</div>
        <h4 className={classes.cursive}>
          <Link
            className={classes.url}
            values={item.url}
          >
          </Link>
        </h4>
      </li>
    )
  }

  return (
    <ul className={classes.list}>
      {examples.map((item, i) => {
        return renderListItem(item, i)
      })}
    </ul>
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
