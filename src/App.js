import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  state={
    titreH1: 'Titre',
    para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, dolores?',
    titre2 : 'second Titre',
    text: 'coucou je suis un paragraphe'
  }

  changeTitle = ()=>{
    this.setState({
      titreH1: 'Mon nouveau titre'
    })
  }

  changeInput = ()=>{
    let input = document.querySelector('input')
    let value = input.value
    this.setState({
      titre2: value
    })
  }

  changeText = () =>{
    let textArea = document.querySelector('textArea')
    let areaValue = textArea.value 
    this.setState({
      text: areaValue
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


        <h2>{this.state.titre2}</h2>
        <input type=""/>
        <button onClick={this.changeInput}>Valider</button>

        <p>{this.state.text}</p>
        <textarea onChange={this.changeText} name="" id="" cols="30" rows="10"></textarea>

        
      </div>
    )
  }
}

export default App

