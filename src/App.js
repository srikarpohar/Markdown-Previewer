import React from 'react';
import './App.css';
import Input from './Components/Input';
import Preview from './Components/Preview';



class App extends React.Component {
  constructor(props) {
    super(props);
    const initText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
    
Heres some code, \`<div></div>\`, between 2 backticks.
    
\`\`\`
// this is multi-line code:
    
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
    
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
    
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
    
And if you want to get really crazy, even tables:
    
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
    
- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
    
    
1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
    
![React Logo w/ Text](https://goo.gl/Umyytc)
`;
    this.state={
      input: initText,
      initText: initText,
      showComponent: 'both',
    }
    this.setInput = this.setInput.bind(this);
    this.maximize = this.maximize.bind(this);
  }

  /*componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
}*/

  maximize(event) {
    const visibleComp = event.target.id.substring(0, event.target.id.length - 3);
    
    this.setState({
      showComponent: visibleComp
    })
  }

  setInput(event, initText="") {
    this.setState({
      input: event === null ? initText : event.target.value
    });

  }

  render() {
  return (
    <div className="App">
      <Input visible={this.state.showComponent} maximize={this.maximize} initValue={this.state.initText} setInput={this.setInput}/>
      <Preview visible={this.state.showComponent} maximize={this.maximize} prvw_input={this.state.input}/>
    </div>
  );
}
}

export default App;
