import React from 'react'
import ReactDOM from 'react-dom'
import {Counter} from './form'
import styled from 'styled-components';

const Title = styled.h1 `
    font-size: ${props => props.large ? '60px' : '30px'};
    color: salmon
`

class Board extends React.Component {
    render() {
        return(
            <div>
                <Title large>Program Increase</Title>
                <Title>Good for beginer</Title>
                <Counter />
            </div>
        )
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
)