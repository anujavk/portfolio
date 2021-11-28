import classes from './Experience.module.css';

const Experience = () => {
    return (
        <section id="experience" className={classes.main}>
            <div className={classes.title}>Experience</div>
            <div className={classes.exp}>
                <div className={classes.date}>July, 2020 - Present</div>
                <div className={classes.info}>
                    <div className={classes.jobTitle}>Developer Associate (SDE)</div>
                    <div className={classes.location}>SAP Labs, Bangalore, India</div>
                    <div className={classes.summary}>
                        Part of team in SAP Enable Now product that develops <span className={classes.bold}> scalable and reusable code and libraries, </span>
                    </div>
                    <div className={classes.summary}>
                        coded in <span className={classes.bold}>Typescript and JavaScript along with NodeJS. </span>
                    </div>
                    <div className={classes.summary}>
                        Developing using concepts like <span className={classes.bold}>page object model, design pattern, asynchronous programming and OOPS.</span>{' '}
                    </div>
                    <div className={classes.summary}>Involved in process of new feature planning and development, and maintaining daily deployments.</div>
                    <div className={classes.summary}>
                        <span className={classes.bold}>Reduced day long work</span> of manual UI testing <span className={classes.bold}>to 3 hrs</span> of automation. Managing{' '}
                        <span className={classes.bold}>docker</span> for the Jenkins jobs.
                    </div>
                </div>
            </div>
            <div className={classes.exp}>
                <div className={classes.date}>May, 2019 - July, 2019</div>
                <div className={classes.info}>
                    <div className={classes.jobTitle}>Software Development Engineer Intern</div>
                    <div className={classes.location}>Barclays, Pune, India</div>
                    <div className={classes.summary}>
                        Worked on <span className={classes.bold}>proof of concept for internal framework</span> for Barclays internal billing system and built foundation
                    </div>
                    <div className={classes.summary}> for it by developing reusable code snippets using <span className={classes.bold}>Java.</span></div>
                </div>
            </div>
            <div className={classes.exp}>
                <div className={classes.date}>May, 2018 - June, 2018</div>
                <div className={classes.info}>
                    <div className={classes.jobTitle}>Research Intern</div>
                    <div className={classes.location}>Airpix, Mumbai, India</div>
                    <div className={classes.summary}>
                        Built a system which can automatically <span className={classes.bold}>detect, classify and count different vehicle</span> and track them from any{' '}
                    </div>
                    <div className={classes.summary}>
                        video footage in real time using <span className={classes.bold}>neural networks and computer vision</span> with state-of-the-art methods.
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
