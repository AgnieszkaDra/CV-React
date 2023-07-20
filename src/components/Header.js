import React from 'react';

import MainProfile from './MainProfile';
import Contacts from './Contacts';

export default class Header extends React.Component {
    
    render() {
        return (
            <header>
                <div className="profile-container">
                    <MainProfile {...this.props.profileBasic}></MainProfile>
                    <Contacts {...this.props.profileList}></Contacts>
                </div>
            </header>

        );
    }
}

