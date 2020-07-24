import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CountryStatus} from './components/CountryStatus/CountryStatus.component.jsx';
import {Header} from './components/Header/Header.component.jsx'

class  App extends React.Component {
  state={
    searchField:"India",
    confirmed:"",
    recovered:"",
    deaths:"",
    
  }

 
    componentDidMount(){
      
      const url=`https://covid19.mathdro.id/api/countries/${this.state.searchField}`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>this.setState({confirmed:data.confirmed.value,recovered:data.recovered.value,deaths:data.deaths.value}));
    }
  
 
  handleChange=(input)=>{
    this.setState({searchField:input})
  }

  handleClick=(e)=>{
    
    this.componentDidMount();
  }

render(){
  return (
    <div  className="App">
      <Header handleChange={(e)=>this.handleChange(e.target.value)} handleClick={(e)=>{this.handleClick()}} />
      <CountryStatus confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths}/>
    
    
  
  
  
     </div>
  );
}
  
}

export default App;
