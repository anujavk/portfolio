import classes from './Experience.module.css';

const Experience = () => {
    return (
        <section id="experience" className={classes.main}>
            <div className={classes.title}>Experience</div>
            <div className={classes.exp}>
                <div className={classes.date}>July, 2020 - Present</div>
                <div className={classes.info}>
                    <div className={classes.jobTitle}>Software Development Engineer</div>
                    <div className={classes.location}>SAP Labs, Bangalore, India</div>
                    <div className={classes.summary}>Part of SAP Enable Now product team, working on writing reusable automation script for API and UI testing.</div>
                    <div className={classes.summary}>Developing using concepts like page object model, design pattern, asynchronous programming and OOPS. </div>
                    <div className={classes.summary}>Involved in process of new feature planning and development and maintaining daily deployments.</div>
                    <div className={classes.summary}>Reduced day long work of manual UI testing to 3 hrs of automation. Managing docker for the Jenkins jobs.</div>
                    <div className={classes.summary}>Tech stack: Typescript, JavaScript, Nodejs, Docker, Protractor, Webdriverio, Mocha, Jasmine</div>
                </div>
            </div>
            <div className={classes.exp}>
                <div className={classes.date}>May, 2019 - July, 2019</div>
                <div className={classes.info}>
                    <div className={classes.jobTitle}>Software Development Engineer Intern</div>
                    <div className={classes.location}>Barclays, Pune, India</div>
                    <div className={classes.summary}>Worked on proof of concept for test automation framework for Barclays internal billing system, and helped</div>
                    <div className={classes.summary}>build foundation for UI testing framework by developing reusable code snippets.</div>
                    <div className={classes.summary}>Tech stack: Java, Selenium, Cucumber</div>
                </div>
            </div>
            <div className={classes.exp}>
                <div className={classes.date}>May, 2018 - June, 2018</div>
                <div className={classes.info}>
                    <div className={classes.jobTitle}>Software Development Intern</div>
                    <div className={classes.location}>Airpix, Mumbai, India</div>
                    <div className={classes.summary}>Built a system which can automatically detect, classify and count different vehicle and track them from any </div>
                    <div className={classes.summary}>video footage realtime using neural networks and computer vision with state-of-the-art concepts.</div>
                    <div className={classes.summary}>Tech stack: Python, Opencv, tensorflow</div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
