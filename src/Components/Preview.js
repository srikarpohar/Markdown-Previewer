import React from 'react';
import marked from 'marked';
import '../scss/Preview.scss';

class Preview extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        marked.setOptions({
            breaks: true
        });
        
        return this.props.visible === "preview" || this.props.visible === 'both' ? (<div id="Preview">
             <div id="header">
            <p id="heading">Preview</p>
            <button id="previewmax" onClick={this.props.maximize}>Enlarge</button>
        </div>
            <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.props.prvw_input)}}>
                </div>
        </div>) : (<div></div>);
    }
}

export default Preview;