import React, { Component } from "react"

export default class Body extends Component {
  render() {
    return (
      <div>
        <p>Body Content goes here</p>
        {this.props.children}
        <p>test</p>
      </div>
    )
  }
}
