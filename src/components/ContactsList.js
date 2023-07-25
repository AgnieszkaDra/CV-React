import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons'

class ContactsList extends React.Component {

    // renderListItem(item, i) {
    //     return (
    //         <li key={`language_item_${i}`}>
    //         {item.key}

    //       </li>
    //     );
    //   }
    // return Object.entries(item).map(([key, values]) => {
    //     return <li>{key}:{values}</li>
    // })

    showObject(el) {
      return Object.entries(el).map(([key, values]) => {
       let break3 = document.createElement('span')
       break3.classList.add('break3')
         return <>{key}{<span class="break3"></span>}{<a href={`//${values}`} target="_blank"> {values} </a>}</>
      })
    }
    renderListItem(item, i) {
        return <li>{item[0]}{this.showObject(item[1])}</li>
    //    return Object.entries(item).map(([key, values]) => {
    //         return <li>{key}:{values}</li>
    //     })
    } 
    
    // renderOdd(item,i) {
        
    //     return item%2
    // }

    // odd(item, list) {

    //     function isObject(variable) {
    //         if(typeof variable === 'object' && variable !== null){
    //            return console.log(variable)
    //             }}
            
          

    //       function isString(variable) {
    //         return typeof variable === 'string' && variable !== null;
    //       }

    //     function filterObjectsFromArray(arr) {
    //         return arr.filter(item => isObject(item));
    //       }

    //       function filterStringsFromArray(arr) {
    //         return arr.filter(item => isString(item));
    //       }
       
    //     const objectsArray = filterObjectsFromArray(list);
    //     const stringArray = filterStringsFromArray(list)

    //     return <li>{stringArray}</li>

       
    // }
   

   
    render() {
       
        return (
            
            <ul className="list-unstyled contacts-list" key="lang_list">
              
                 
                {this.props.list.map((item, i) => {
                    return this.renderListItem(item, i)
                })}
            </ul>







        )
    }
}

export default ContactsList