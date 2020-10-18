import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (<div>
        <h3>Enter the input:</h3>
        <textarea id="input" rows="20" cols="50" onChange={this.props.setInput}></textarea>
    </div>);
}
}

export default Input;