import classes from './Header.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Header = (props) => {
    const [verNav, setVerNav] = useState(false);
    const [tabClass, setTabClass] = useState(classes.tabs);
    const [greyBg, setGreyBg] = useState(false);

    const scrollEventListeners = () => setGreyBg(window.pageYOffset > 150);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', scrollEventListeners);
        }
        return () => window.removeEventListener('scroll', scrollEventListeners);
    }, []);

    const verNavOpenHandler = () => {
        setVerNav(true);
        setTabClass(classes.open);
    };

    const verNavCloseHandler = () => {
        setVerNav(false);
        setTabClass(classes.tabs);
    };

    return (
        <div className={`${classes['main-block']} ${greyBg ? classes.grey : ''} ${verNav ? classes.nav : ''}`} id="header">
            {!verNav && (
                <Link to="/" className={classes.logo}>
                    &lt;Anuja/&gt;
                </Link>
            )}
            {!verNav && <GiHamburgerMenu className={classes.icons} onClick={verNavOpenHandler} />}
            {verNav && <MdClose className={classes.icons} onClick={verNavCloseHandler} />}
            <div className={classes.tabsDiv}>
                <NavLink basename="" to={{ pathname: 'https://github.com/anujavk?tab=repositories' }} target="_blank" className={tabClass} activeClassName={classes.active}>
                    <IoLogoGithub className={classes.iconBtn} />
                </NavLink>
                <NavLink basename="" to={{ pathname: 'https://www.linkedin.com/in/anuja-khadatkar-435235166' }} target="_blank" className={tabClass} activeClassName={classes.active}>
                    <IoLogoLinkedin className={classes.iconBtn} />
                </NavLink>
                <NavLink to={{ pathname: 'https://www.google.com' }} target="_blank" className={tabClass} activeClassName={classes.active}>
                    Resume
                </NavLink>
                <Link to="experience" onClick={verNavCloseHandler} spy={true} smooth={true} duration={2000} className={tabClass} activeClassName={classes.active}>
                    Experience
                </Link>
                <Link to="project" onClick={verNavCloseHandler} spy={true} smooth={true} duration={2000} className={tabClass} activeClassName={classes.active}>
                    Project
                </Link>
                <Link to="skills" onClick={verNavCloseHandler} spy={true} smooth={true} duration={2000} className={tabClass} activeClassName={classes.active}>
                    Skills
                </Link>
            </div>
        </div>
    );
};

export default Header;
