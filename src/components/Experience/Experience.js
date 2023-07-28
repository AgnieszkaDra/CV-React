import React from 'react';

import classes from './styles.module.css'

export const Experience = (props) => {

    const {
        experienceList,

    } = props


    const renderListItem = (item, i) => {
        return (
            <div className="item">
               <h3 className="job-title">{item.title}</h3>
                {renderCompanySection(item.company, item.companyLink, item.date, item.description)}
              
            </div>
        );
    }

    const renderCompanySection = (company, companyLink, date, companyDescription) => {
        if (company && companyLink) {
          
            return (<div className="company"> <a href={companyLink} target="_blank">{company}</a>{date}{companyDescription}</div>);
        }
        return null;

    }

    return (

        <div className={`${classes.root}`} >
            {experienceList.map((item, i) => {
                return renderListItem(item, i);
            })}
        </div>





    )
}


export default Experience