import React from "react";
import ContactsList from "./ContactsList";

class Contacts extends React.Component{
  
    render(){
       
        return (
         
                <div className="contact-container container-block">

        <ul className="list-unstyled interests-list" key="lang_list">
         <ContactsList {...this.props}></ContactsList>
        </ul>                    
                </div>
          
        )
    }
}
export default Contacts