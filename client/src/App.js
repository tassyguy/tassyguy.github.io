import React, { Component } from "react"
//import logo from './logo.svg';
import "./App.scss"
import Layout from "./components/Layout"
import { Theme } from "@rmwc/theme"
class App extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err))
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend")
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.data}</p>
        <Theme>
          <Layout />
        </Theme>
      </div>
    )
  }
}

export default App
