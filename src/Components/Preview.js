import React from 'react';

class Preview extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            prvw_input: ''
        }
    }

    render() {
        return (<div>
            <textarea id="preview" rows="20" cols="50" value={this.props.prvw_input}></textarea>
        </div>);
    }
}

export default Preview;