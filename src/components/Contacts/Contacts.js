import React from "react";
import ContactsList from "../ContactsList/ContactsList";

import classes from './styles.module.css'
// class Contacts extends React.Component{
  
//     render(){
       
//         return (
         
//                 <div className="contact-container container-block">

        
//          <ContactsList {...this.props}></ContactsList>
                       
//                 </div>
          
//         )
//     }
// }
// export default Contacts

export const Contacts = (props) => {
    const {
        className,
        ...otherProps
       } = props

      return (
         
     <div className={`${classes.root}${className ? ` ${className}` : ''}`} {...otherProps}>
        
                
        <ContactsList {...props}></ContactsList>
                               
             </div>
                  
       )
}

export default Contacts