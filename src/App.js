import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  state={
    titreH1: 'Titre',
    para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, dolores?'
  }

  changeTitle = ()=>{
    this.setState({
      titreH1: 'Mon nouveau titre'
    })
  }


  render() {
    return (
      <div>
        <h1 onClick={this.changeTitle}>{this.state.titreH1}</h1>

        <p>{this.state.para}</p>

        <button onClick={()=>{
          this.setState({
            para: 'paragraphe modifier'
          })
        }}>changer le paragraphe</button>

        
      </div>
    )
  }
}

export default App

