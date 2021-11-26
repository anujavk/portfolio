import classes from './Skills.module.css';

const skills = ['JavaScript', 'TypeScript', 'React', 'Redux', 'NodeJs', 'HTML/CSS', 'Selenium', 'Protractor', 'Docker', 'Postman', 'Machine learning', 'Computer Vision', 'Git', 'Jira', 'Jenkins', 'Java', 'C++'];

const Skills = () => {
    return (
        <section id="skills" className={classes.main}>
            <div className={classes.title}>Skills</div>
            <div className={classes.skillList}>
                {skills.map((item) => {
                    return <div className={classes.item}>{item}</div>;
                })}
            </div>
        </section>
    );
};

export default Skills;
