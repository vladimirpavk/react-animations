import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
    let cssClasses = [classes.Backdrop, props.show ? classes.BackdropOpen : classes.BackdropClosed];
    console.log('Backdrop', cssClasses)
    return (
        <div className={cssClasses.join(' ')}></div>
    )
    
}
    
export default backdrop;