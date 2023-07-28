import React from 'react';

import classes from './styles.module.css'

export const Skills = (props) => {

    const {
        frontendtechnologies,
        languages
    } = props


    const renderListFront = (item, i) => {
        return (
            <li key={`front_item_${i}`}>
        {item}{item.level}
       
      </li>
          
        );
    }

    const renderListLanguages = (item, i) => {
        // return Object.entries(item).map(([key, values]) => {
        //     return <>{item.name}</>
        // })
        return (
            <li key={`front_item_${i}`}>
        {item.name}{item.level}
       
      </li>
          
        );
        
    }

   

    return (

        <div className={`${classes.root}`} >
            <ul className="list-unstyled" key="front_list">
                 {frontendtechnologies.map((item, i) => {
                return renderListFront(item, i);
            })}
            </ul>
            <ul className="list-unstyled" key="front_list">
                 {languages.list.map((item, i) => {
                return renderListLanguages(item, i);
            })}
            </ul>
           
        </div>


    )
}


export default Skills