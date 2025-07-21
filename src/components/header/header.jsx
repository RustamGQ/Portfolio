
import { Link } from 'react-scroll';
import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <h1 className='header__title'>
                        <Link to="home" smooth={true} duration={500} className="header__title-link">
                            Portfolio
                        </Link>
                    </h1>
                    <nav className='menu'>
                        <ul className='menu__list'>
                            <li className="menu__item">
                                <Link to="about" smooth={true} duration={500} className="menu__link">
                                    About me
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="skills" smooth={true} duration={500} className="menu__link">
                                    Skills
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="projects" smooth={true} duration={500} className="menu__link">
                                    Projects
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="contact" smooth={true} duration={500} className="menu__link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

