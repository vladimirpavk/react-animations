import React, { Component } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor(){
    super();
    this.state = {
      modalIsOpened: false,
      blockIsOpened: false
    }
  }

  buttonClicked = (event)=>{
    this.setState({
      modalIsOpened: true
    })
  }

  dismissButtonClicked = (event)=>{
    this.setState({
      modalIsOpened: false
    })
  }

  render() {
    const defaultStyle = {
      backgroundColor: 'red',
      width: 100,
      height: 100,
      margin: 'auto',
      transition: 'opacity 1s ease-out'
    };
    const transitionStyles = {
      entering: { opacity: 0.5 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0.5 },
      exited:  { opacity: 0 },
    };

    return (    
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={()=>this.setState((oldState)=>({blockIsOpened: !oldState.blockIsOpened}))}>Toggle block</button>
       {/*  { this.state.blockIsOpened ? <div style={{
                                          backgroundColor: 'red',
                                          width: 100,
                                          height: 100,
                                          margin: 'auto'
                                        }}></div> : null } */}
        <Transition
          in={this.state.blockIsOpened}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          { state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}></div>
          )}
        </Transition>     

        <Modal show={this.state.modalIsOpened} closed={(event)=>{this.dismissButtonClicked()}}/>
        <Backdrop show={this.state.modalIsOpened}/>
        <button className="Button" onClick={(event)=>this.buttonClicked()}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    )}}

export default App;
