import React from 'react';
import { Transition } from 'react-transition-group';

import classes from './Modal.module.css';

const modal = (props) => {
    /* let cssClasses = [classes.Modal, props.show==='entering' ? classes.ModalOpen : props.show==='exiting' ? classes.ModalClosed : null];
    console.log('Modal', cssClasses);
 */
    const transitionClasses = {
        'entering': classes.ModalOpen,
        'exiting': classes.ModalClosed
    };

    const animationTimings={
        enter: 400,
        exit: 1000
    };

    //console.log(props);

    return(
        <Transition
          in={props.show}
          timeout={animationTimings}
          mountOnEnter
          unmountOnExit
        >
        {
          state => (              
            <div>
                <p>{state}</p>
                <div className={classes.Modal + ' ' + transitionClasses[state]}>
              {/*   <div style={{
                    ...classes.Modal,
                    ...transitionClasses[state]
                }}> */}
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
            </div>
          )
        }
        </Transition>
    )
  
}

export default modal;