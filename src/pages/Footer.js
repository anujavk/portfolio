import classes from './Footer.module.css';
import { FaHeart, FaReact } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <section>
            <div id="footer" className={classes.main}>
                &lt;/&gt; made with
                <span className={classes.icon}>
                    <FaHeart/>
                </span>
                using
                <span className={classes.icon}>
                    <FaReact  />
                </span>
                by
                <NavLink to={{ pathname: 'https://github.com/anujavk?tab=repositories' }} target="_blank" className={classes.link}>
                    Anuja
                </NavLink>
            </div>
        </section>
    );
};

export default Footer;
