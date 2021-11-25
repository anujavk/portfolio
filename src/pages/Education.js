import classes from './Education.module.css';

const Education = () => {
    return (
        <section id="education" className={classes.main}>
            <div className={classes.title}>Highest Education</div>
            <div className={classes.box}>
                <div className={classes.degree}>Bachelor of Technology in Information Technology</div>
                <div className={classes.name}>
                    Veermata Jijabai Technological Institute (VJTI), Mumbai <span>[2016-2020]</span>
                </div>
                <div className={classes.sylb}>In top 25 teams of Tata Crucuible Hacakathon from India West Zone where proposed a solution to counting cylindrical objects like rod or straw using machine learning and computer vision concepts.</div>
                <div className={classes.sylb}>Helped organize and taught at self balancing robotics workshop, and part of robotics society, VJTI.</div>
            </div>
        </section>
    );
};

export default Education;
