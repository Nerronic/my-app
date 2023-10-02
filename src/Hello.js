import React, { Component } from "react";

class Hello extends Component{
    render() {
        return (<div className = 'f1 tc'>
            <h1> Hey this works</h1>
    < h2> Lets get this started!</h2>
    <p>  { this.props.greeting}</p>
    </div>)
    }
}

export default Hello