import React from 'react';
import { Children } from 'react';

import classes from './styles.module.css'

 const Section = (props) =>  {
  const {
    className,
    sectionTitle,
    children
  }=props


    return (
      <section className={`section ${(className || ' ') && `${classes.root}`}`}>
        <h2 className="section-title">
         {sectionTitle}
         <div className="RowList">
      {Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      )}
    </div>
        </h2>
      
      </section>
    );
  }


export default Section

