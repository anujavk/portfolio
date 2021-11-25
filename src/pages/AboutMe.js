import classes from './AboutMe.module.css';
import { NavLink } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section>
            <div id="aboutme" className={classes.main}>
                <div className={classes.title}> About Me</div>
                <div className={classes.line}>
                    <div>blah blab blahblah blab blah blah blab blah</div>
                    <div>blah blab blah blah blab blah blah blab blah</div>
                    <div>blah blab blah blah blab blah blah blab blah</div>
                </div>
                <NavLink to={{ pathname: 'https://www.google.com' }} target="_blank" className={classes.resume}>Resume</NavLink>
            </div>
        </section>
    );
};

export default AboutMe;
