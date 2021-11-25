import classes from './Footer.module.css';
import { FaHeart, FaReact } from 'react-icons/fa';

const Footer = () => {
    return (
        <section>
            <div id="footer" className={classes.main}>
                &lt;/&gt; made with
                <span className={classes.icon}>
                    <FaHeart />
                </span>
                using
                <span className={classes.icon}>
                    <FaReact />
                </span>
                by
                <a className={classes.link} href="https://github.com/anujavk?tab=repositories" target="_blank" rel="noopener noreferrer">
                    Anuja
                </a>
            </div>
        </section>
    );
};

export default Footer;
