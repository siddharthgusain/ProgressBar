import React,{ Component } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';

class  App extends Component  {
  
 
    constructor(props)
    {
      super(props);
      this.state = {
        percent:60
      }
    }

    render(){
      return (
        <div className="App">
          <ProgressBar percent={ this.state.percent }/>
        </div>
      );
    }
}

export default App;
