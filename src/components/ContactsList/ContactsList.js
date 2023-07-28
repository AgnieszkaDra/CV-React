import React from "react";

import classes from './styles.module.css'

export const ContactsList = (props) => {

    const {
        className,
        ...otherProps
    } = props

    const showObject = (el) => {

        return Object.entries(el).map(([key, values]) => {
            return <>{<span class="space"></span>}{<a href={`//${values}`} target="_blank"> {values} </a>}</>
        })

    }

    const renderListItem = (item, i) => {

        return <li>{item[0]}{showObject(item[1])}</li>

    }

    return (

        <ul className={`${classes.root}${className ? ` ${className}` : ''}`} {...otherProps}>
            {props.list.map((item, i) => {
                return renderListItem(item, i)
            })}
        </ul>

    )
}

export default ContactsList