import React from "react";
import logo from "../assets/face.jpg"


import classes from './styles.module.css'


export const MainProfile = (props) => {
    const {
        className,
        ...otherProps
       
      } = props
  
       
        return (
         
                <div className={`${classes.root}${className ? ` ${className}` : ''}`} {...otherProps}>
                    <img className="photo" src={logo} alt="" style={{ maxWidth: 185 }} />
                    <h1 className="name">{props.name}</h1>
                    <h3 className='tagname'>{props.title}</h3>                     
                </div>
          
        )
    }

export default MainProfile