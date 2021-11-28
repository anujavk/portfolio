import classes from './Hello.module.css';
import { Link } from 'react-scroll';

const Hello = () => {
    return (
        <section className={classes.main} id="hello">
            <div className={classes.line1}>Hello, I'm</div>
            <div className={classes.line2}>Anuja Khadatkar</div>
            <div className={classes.line3}>Passionate about changing the world with technology.</div>
            <Link to="contact" spy={true} smooth={true} duration={2000} className={classes.line4}>
                Connect with me
            </Link>
        </section>
    );
};

export default Hello;
