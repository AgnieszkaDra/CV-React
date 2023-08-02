import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const ContactsList = (props) => {
  const {
    className
  } = props

  const liClass = classes[className]

  const showObject = (el) => {
    return Object.entries(el).map(([key, values]) => {
      return <>{<a href={`//${values}`} target='blank'> {values} </a>}</>
    })
  }

  const renderListItem = (item, i) => {
    return <li className={`${liClass ? `${liClass}` : ''}`}>{item[0]}{showObject(item[1])}</li>
  }

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {props.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </ul>
      <h1 className={classes.name}>{props.name}</h1>
      <h3 className={'tagname'}>{props.title}</h3>
      <p className={classes.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias id commodi explicabo sapiente inventore! Ad est culpa commodi non, quasi dignissimos illum possimus repudiandae dolor dolore? Voluptatum adipisci exercitationem eius.</p>
      <p className={classes.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nulla perspiciatis iure aperiam sint accusamus culpa blanditiis facilis, corporis, excepturi nihil doloremque nesciunt incidunt modi dicta expedita velit. Eveniet, vero.</p>
      <p className={classes.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus placeat iste eos saepe, ad at unde quia, sint facere impedit aut consequatur necessitatibus harum officia, quam molestias cum veritatis fuga?</p>
    </div>

  )
}

ContactsList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  title: PropTypes.string
}

export default ContactsList
