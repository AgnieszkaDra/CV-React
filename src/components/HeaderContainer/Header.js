import React from 'react';

import MainProfile from '../MainProfile/MainProfile';
import Contacts from '../Contacts/Contacts';

import classes from './styles.module.css'

export const Header = (props) => {

    const {
        className,
        ...otherProps
    } = props


    return (

        <header>
            <div className={`${classes.root}${className ? `${className}` : ''}`} {...otherProps}>
                <MainProfile {...props.infoProfile.profileBasic}></MainProfile>
                <Contacts {...props.infoProfile.profileList}></Contacts>
            </div>
        </header>

    )
}


export default Header

