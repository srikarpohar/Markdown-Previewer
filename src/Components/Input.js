import React from 'react';
import '../scss/Input.scss';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return this.props.visible === "editor" || this.props.visible === 'both' ? (<div id="Input">
        <div id="header">
            <p id="heading">Editor</p>
            <button id="editormax" onClick={this.props.maximize}>Enlarge</button>
        </div>
    <textarea id="editor" rows="20" cols="50" onChange={this.props.setInput}>{this.props.initValue}</textarea>
    </div>)  : (<div></div>);
}
}

export default Input;