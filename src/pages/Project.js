import classes from './Project.module.css';

const data = [
    {
        name: 'Restaurant Food Ordering App',
        desc: 'An e-commerce responsive website to order food built using React and its hooks firebase to store data using fetch API and Context API to share data.',
        tech: 'React, Hooks, React Router, JavaScript, CSS, Context API',
        href: 'https://anujavk.github.io/restaurant-website/',
    },
    {
        name: 'Personal Portfolio Website',
        desc: 'Simple responsive website created to show personal skills. Built using modern javascript, create-react-app with React-Router and github actions',
        tech: 'React, Hooks, React Router, JavaScript, CSS',
        href: 'https://github.com/anujavk/portfolio',
    },
    {
        name: 'Haystack Problem',
        desc: 'Developed as a part of hackathon to count number of cylindrical objects like rod, straw from given image using computer vision and ML',
        tech: 'OpenCV, Tensorflow',
        href: 'https://github.com/anujavk/hackathon',
    },
    {
        name: 'Drowsiness Detection System',
        desc: 'Analysing eye blinking rate and heart rate to determine the drowsiness of the user and generate alarm using microcontroller.',
        tech: 'Embedded C, Arduino, Microcontroller, Sensors',
    },
];

/* const ProjectData = (props) => {
    const [showDesc, setShowDesc] = useState(false);

    const mouseEnterHandler = () => {
        setShowDesc(true);
    };

    const mouseLeaveHandler = () => {
        setShowDesc(false);
    };

    return (
        <span>
            <div className={classes.project}>
                <div className={classes.projectName} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                    {!showDesc && <span>{props.name}</span>}
                    {showDesc && <span>{props.desc}</span>}
                </div>
            </div>
        </span>
    );
}; */

const ProjectData1 = (props) => {
    return (
        <span>
            <a className={classes.project} href={props.href} target="_blank" rel="noopener noreferrer">
                <div className={classes.name}>{props.name}</div>
                <div className={classes.desc}>{props.desc}</div>
                <div className={classes.tech}>{props.tech}</div>
            </a>
        </span>
    );
};

const Project = () => {
    return (
        <section id="project" className={classes.main}>
            <div className={classes.title}>Project</div>
            <div className={classes.row}>
                {data.map((item) => {
                    return <ProjectData1 name={item.name} desc={item.desc} tech={item.tech} href={item.href} />;
                })}
            </div>
        </section>
    );
};

export default Project;
