import React from "react";
import ContactsList from "./ContactsList";

class Contacts extends React.Component{
  
    render(){
       
        return (
         
                <div className="contact-container container-block">

        
         <ContactsList {...this.props}></ContactsList>
                       
                </div>
          
        )
    }
}
export default Contacts