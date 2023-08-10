import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography/Typography'
import { Link } from '../Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Experience = (props) => {
  const {
    experienceList
  } = props

  const renderListItem = (item, i) => {
    return (
      <>
        <Typography
          className={'job-title'}
          variant={'h3'}
          color={'whitesmoke'}
        >
          { item.title }
        </Typography>
        {renderCompanySection(item.company, item.companyLink, item.date, item.description)}
      </>
    )
  }

  const renderCompanySection = (company, companyLink, date, companyDescription) => {
    if (company && companyLink) {
      return (
        <>
          <div className={'company'}>
            <FontAwesomeIcon
              icon={faGlobe}
              key={'kk'}
            />
            <Link
              key={'njnj'}
              values={`${companyLink}`}
            >
            </Link>
          </div>
          <div>
            {date} <br></br>
            {companyDescription}
          </div>
        </>
      )
    }
    return null
  }

  return (

    experienceList.map((item, i) => {
      return renderListItem(item, i)
    })

  )
}

Experience.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  experienceList: PropTypes.array
}

export default Experience
