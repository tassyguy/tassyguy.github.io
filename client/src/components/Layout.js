import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
//import Body from './pages/Body'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <About/>
                <p>Content is here</p>
                {this.props.children}
                <Home/>
                
            </div>
        )
    }
}
