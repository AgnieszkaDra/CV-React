import React from "react";
import logo from '../assets/face.jpg'
class MainProfile extends React.Component{
  
    render(){
       
        return (
         
                <div>
                    <img className="photo" src={logo} alt="" style={{ maxWidth: 185 }} />
                    <h1 className="name">{this.props.name}</h1>
                    <h3 className='tagname'>{this.props.title}</h3>                     
                </div>
          
        )
    }
}
export default MainProfile