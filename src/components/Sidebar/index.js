import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faCodePullRequest, faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>

        <nav>
            <NavLink exact='true' activeClassName='active' to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeClassName='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeClassName='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeClassName='active' className="projects-link" to='/projects'>
                <FontAwesomeIcon icon={faCodePullRequest} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jacob-stevenson-406098162/">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Jstevenson02">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/LittleNinja2002/videos">
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar