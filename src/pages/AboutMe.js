import classes from './AboutMe.module.css';

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
                <a href="https://drive.google.com/file/d/1m69cjUriov5kZVxggTrJ94XT5y_FaYUi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={classes.resume}>
                    Resume
                </a>
            </div>
        </section>
    );
};

export default AboutMe;
