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
                    <div className={classes.summary}>
                        Part of SAP Enable Now product team, working on writing reusable automation script for<span className={classes.bold}> API and UI testing.</span>
                    </div>
                    <div className={classes.summary}>
                        Developing using concepts like <span className={classes.bold}>page object model, design pattern, asynchronous programming and OOPS.</span>{' '}
                    </div>
                    <div className={classes.summary}>Involved in process of new feature planning and development, and maintaining daily deployments.</div>
                    <div className={classes.summary}>
                        <span className={classes.bold}>Reduced day long work</span> of manual UI testing <span className={classes.bold}>to 3 hrs</span> of automation. Managing{' '}
                        <span className={classes.bold}>docker</span> for the Jenkins jobs.
                    </div>
                    <div className={classes.summary}>
                        Tech stack: <span className={classes.underline}>Typescript, JavaScript, Nodejs, Docker, Protractor, Webdriverio, Mocha, Jasmine</span>
                    </div>
                </div>
            </div>
            <div className={classes.exp}>
                <div className={classes.date}>May, 2019 - July, 2019</div>
                <div className={classes.info}>
                    <div className={classes.jobTitle}>Software Development Engineer Intern</div>
                    <div className={classes.location}>Barclays, Pune, India</div>
                    <div className={classes.summary}>
                        Worked on <span className={classes.bold}>proof of concept for test automation framework</span> for Barclays internal billing system, and helped
                    </div>
                    <div className={classes.summary}>build foundation for UI testing framework by developing reusable code snippets.</div>
                    <div className={classes.summary}>
                        Tech stack: <span className={classes.underline}>Java, Selenium, Cucumber</span>
                    </div>
                </div>
            </div>
            <div className={classes.exp}>
                <div className={classes.date}>May, 2018 - June, 2018</div>
                <div className={classes.info}>
                    <div className={classes.jobTitle}>Software Development Intern</div>
                    <div className={classes.location}>Airpix, Mumbai, India</div>
                    <div className={classes.summary}>
                        Built a system which can automatically <span className={classes.bold}>detect, classify and count different vehicle</span> and track them from any{' '}
                    </div>
                    <div className={classes.summary}>
                        video footage realtime using <span className={classes.bold}>neural networks and computer vision</span> with state-of-the-art concepts.
                    </div>
                    <div className={classes.summary}>
                        Tech stack: <span className={classes.underline}>Python, Opencv, tensorflow</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;