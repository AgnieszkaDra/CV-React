import React from 'react';

import MainProfile from './MainProfile';

export default class Header extends React.Component {
    
    render() {
        return (
            <header>
                <div className="profile-container">
                    <MainProfile {...this.props}></MainProfile>
                </div>
            </header>

        );
    }
}

