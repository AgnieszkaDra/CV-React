import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons'

class ContactsList extends React.Component{
  
    // renderListItem(item, i) {
    //     return (
    //         <li key={`language_item_${i}`}>
    //         {item.key}
            
    //       </li>
    //     );
    //   }

    renderListItem(item,i) {
        return Object.entries(item).map(([key, values]) => {
            return <li>{key}:{values}</li>
        })
    }
    render(){
       
        return (
         
            <ul className="" key="">
            {this.props.list.map((item, i) => {
            return this.renderListItem(item,i)
          })}
          </ul>
         
          
        
      
            
      
          
        )
    }
}

export default ContactsList