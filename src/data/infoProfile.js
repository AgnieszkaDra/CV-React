import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons'
const infoProfile = {
    profileBasic :{ name: 'Agnieszka Dragańczyk', title: 'Junior Front End Developer'},
    profileList: {
      list: [
        [ <FontAwesomeIcon icon={faEnvelope}/> , { mail: 'agnieszka.127@interia.pl'}],
        [ <FontAwesomeIcon icon={faPhone} />, { phoneNumber: '+48 517 862 170' }],
        [ <FontAwesomeIcon icon={faGlobe} />,{ portfolio: ''}]
      ]
    } 
        
  }
  
  
  export default infoProfile;