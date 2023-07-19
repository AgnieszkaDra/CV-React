
import logo from '../src/assets/face.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="container">
      <div class="header">
        <div className="profile-container">
          <div>
            <img className="photo" src={logo} alt="" style={{ maxWidth: 185 }} />
            <h1 className="name">Agnieszka Dragańczyk</h1>
            <h3 className="tagline">Junior Front End Developer</h3>
          </div>
          <div className="contact-container container-block">
            <ul className="contact-list list-unstyled">
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href={'//mailto: agnieszka.127@interia.pl'} target="_blank">agnieszka.127@interia.pl</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href={'//tel:+48517862170'} target="_blank"> +48 517862170 </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} />
                <a href={'//tel:+48517862170'} target="_blank"> Portfolio </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLink} />
                <a href={'//tel:+48517862170'} target="_blank"> Linkedln </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLink} />
                <a href={'//tel:+48517862170'} target="_blank"> Github </a>
              </li>
            </ul>
          </div>
          <div className="education-container container-block">
            <h2 className="container-block-title">Job</h2>
            <div className="item">
              <h4 className="degree">Master of Pharmacy</h4>
              <h5 className="meta">Work at pharmacist</h5>
              <div className="time">2013-Present</div>
            </div>
          </div>
          <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list" key="lang_list">
              <li key='language-item'>
                POLISH
                <span className="lang-desc">Native</span>
              </li>
              <li key='language-item'>
                ENGLISH
                <span className="lang-desc">B1/B2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main">
      </div>
    </div>
  );
}

export default App;
