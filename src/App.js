import React from 'react';
import './App.css';
import Input from './Components/Input';
import Preview from './Components/Preview';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      input:''
    }
    this.setInput = this.setInput.bind(this);
  }

  setInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
  return (
    <div className="App">
      <Input setInput={this.setInput}/>
      <Preview prvw_input={this.state.input}/>
    </div>
  );
}
}

export default App;
