import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [],
  };

  //Exec assim que o component aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(techs){
      this.setState({ techs: JSON.parse(techs)})
    }
  }


  //Exec sempre que houver alteracoes nas props ou state
  componentDidUpdate(prevProps, prevState) {
    //prevProps - props antigo 
    //prevState - state antigo
    if(prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }

  }

  //Exec quando o component deixa de existir
  componentWillUnmount(){
    
  }





  handleInputChenge = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => 
      t !== tech
    )})
  }
  
  render(){
    return(
      <form onSubmit={ this.handleSubmit }>
        <ul>
          { this.state.techs.map(tech =>( 
            <TechItem 
              key={tech} 
              tech={tech}
              onDelete={ () => this.handleDelete(tech) }
            />
          ))}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChenge} 
          value={ this.state.newTech} 
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList