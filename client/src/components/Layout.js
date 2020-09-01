import React, { Component } from 'react'
import {Header, Body, Footer} from './layout/index'
import {Home, About} from './pages/index'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header/>
                <Body>
                    <About/>
                    <Home/>
                </Body>
                <Footer/>
            </>
        )
    }
}
