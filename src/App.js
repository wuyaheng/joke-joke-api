import React, { Component } from 'react'
import API from './utils/API'
import Card from './components/Card/Card'
import Button from './components/Button/Button'


class App extends Component {
  state = {
    result: ""
  }

componentDidMount() {
  API.getData()
  .then(res => this.setState({result: res.data.content}))
}

handleClick = (event) => {
  event.preventDefault();
    API.getData()
    .then(res => this.setState({result: res.data.content}))
}


  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mt-3"><span role="img" aria-label="Joy">😂</span>Joke Joke<span role="img" aria-label="Joy">😂</span></h1>
      <Card result={this.state.result}/>
      <Button handleClick={this.handleClick}/>
      </React.Fragment>
    )
  }
}

export default App;
