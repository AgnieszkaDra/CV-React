import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
const infoProfile = {
  profileBasic: { name: 'Agnieszka Dragańczyk', title: 'Junior Front End Developer' },
  profileList: {
    list: [
      // eslint-disable-next-line react/react-in-jsx-scope
      [<FontAwesomeIcon
        icon={faEnvelope}
        key={'kk'}
      />,
      { mail: 'agnieszka.127@interia.pl' }],
      // eslint-disable-next-line react/react-in-jsx-scope
      [<FontAwesomeIcon
        icon={faPhone}
        key={'kkk'}
      />,
      { phoneNumber: '+48 517 862 170' }],
      // eslint-disable-next-line react/react-in-jsx-scope
      [<FontAwesomeIcon
        icon={faGlobe}
        key={'ndsjdn'}/>, { portfolio: '' }]
    ]
  },
  profileDescription: {
    sectionTitle: 'Profile',
    description: 'This is my passion and wish to be also my work'
  }

}

export default infoProfile
