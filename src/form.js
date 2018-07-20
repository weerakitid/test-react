import React from 'react'
import styled from 'styled-components'

const Link = styled.a `
    display: box;
    background: salmon;
    padding: 1em 1.5em;
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin-top: 100px;
`

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    handleClick = (e) => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <Link href="#" onClick={this.handleClick}>Incredment</Link>
            </div>
        )
    }
}



export {
    Counter,
    Link
}