import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor(){
    super();
    this.state = {
      modalIsOpened: false
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
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modalIsOpened} closed={(event)=>{this.dismissButtonClicked()}}/>
        <Backdrop show={this.state.modalIsOpened}/>
        <button className="Button" onClick={(event)=>this.buttonClicked()}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    )}}

export default App;
