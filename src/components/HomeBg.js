import classes from './HomeBg.module.css';
import { Fragment } from 'react';

const HomeBg = (props) => {
    return (
        <Fragment>
            {props.onMobile && <section className={classes.white} />}
            {!props.onMobile && (
                <Fragment>
                    <section className={classes.homeBg} />
                    <div className={classes.stars}></div>{' '}
                </Fragment>
            )}
        </Fragment>
    );
};

export default HomeBg;
