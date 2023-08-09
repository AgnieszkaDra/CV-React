import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography/Typography'

import classes from './styles.module.css'

export const Experience = (props) => {
  const {
    experienceList
  } = props

  const renderListItem = (item, i) => {
    return (
      <div className={'item'}>
        <Typography
          className={'job-title'}
          variant={'h3'}
          color={'black'}
        >
          { item.title }
        </Typography>
        {renderCompanySection(item.company, item.companyLink, item.date, item.description)}
      </div>
    )
  }

  const renderCompanySection = (company, companyLink, date, companyDescription) => {
    if (company && companyLink) {
      return (
        <div className={'company'}>
          <a
            href={companyLink}
            target={'blank'}
            rel={'noreferrer'}
          >
            {company}
          </a>
          {date} {' '}
          {companyDescription}
        </div>
      )
    }
    return null
  }

  return (

    <div className={`${classes.root}`} >
      {experienceList.map((item, i) => {
        return renderListItem(item, i)
      })}
    </div>

  )
}

Experience.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  experienceList: PropTypes.array
}

export default Experience
