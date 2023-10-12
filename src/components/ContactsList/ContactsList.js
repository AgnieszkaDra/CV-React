import React from 'react'
import Icon from '../Icon'
import PropTypes from 'prop-types'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'


import classes from './styles.module.css'
import { Link } from '../Link'

export const ContactsList = (props) => {
  const {
    className,
    list

  } = props

  const variantClass = classes[className]

  // const liClass = classes[className]

  // const showObject = (el) => {
  //   return Object.entries(el).map(([key, values]) => {
  //     return (
  //       <Link
  //         key={key}
  //         values={`${values}`}
  //       >
  //       </Link>
  //     )
  //   })
  // }

  const renderListItem = (item, i) => {
    return <li key={i}>
      <>
        <Icon icon={item.icon}></Icon>
        <Link values={item.data}></Link>
      </>
    </li>

    // return <li className={`${liClass ? `${liClass}` : ''}`}><span className={'font-contrast'}>{item[0]}</span>{showObject(item[1])}</li>
  }

  return (
    <div className={`${variantClass ? ` ${variantClass}` : ''}`}>
      <ul className={classes.list}>
        {list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </ul>
      {/* <Typography
        className={classes.name}
        variant={'h1'}
        color={'black'}
      >
        {props.name}
      </Typography>
      <Typography
        className={classes.title}
        variant={'h2'}
        color={'white'}
      >
        {props.title}
      </Typography> */}
    </div>

  )
}

ContactsList.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  title: PropTypes.string
}

export default ContactsList
