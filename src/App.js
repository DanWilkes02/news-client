import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      headline: '',
    }
  }

  componentDidMount(){
    console.log('didMount');
    axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=2f0e768750294d9a886f63de3db38fd0')
    .then((res) => {
      let headline = res.data.articles[0].title;
      console.log(headline);
      this.setState({headline: headline});
    });
  }

  render() {

    return (
      <div className="App">
        <h1>{this.state.headline}</h1>
      </div>
    );
  }
}

export default App;
