import React, {Component} from 'react';
import './App.min.css';
import axios from 'axios';

class NavBar extends Component {
  render() {
    return (

      <div className="nav-bar">
        <h1>NewsClient</h1>
      </div>

    );
  }
}

class NewsWidget extends Component {
  render() {

    return (

        <div className="news-widget">
          <h1>{this.props.headline}</h1>
          <h6>{this.props.source}</h6>
          <h3>{this.props.author}</h3>
          <p>{this.props.story}</p>
          <button>Read more</button>
        </div>



    );
  }
}

class footer extends Component {}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      source: ''
    }
  }



  componentDidMount() {
    console.log('didMount');

    axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=2f0e768750294d9a886f63de3db38fd0').then((res) => {
      let headline = res.data.articles[0].title;
      let source = res.data.source;
      console.log(headline);
      this.setState({
        headline: headline,
        source: source
      });
    });
  }

  render() {

    return (
      <div id="App">
        <NavBar/>

        <div className="page-content">
          <NewsWidget
            widgetId='0'
            headline={this.state.headline}

          />
          <NewsWidget
            widgetId='1'
            headline={this.state.headline}
          />
          <NewsWidget
            widgetId='2'
            headline={this.state.headline}
          />

          <NewsWidget
            widgetId='3'
            headline={this.state.headline}
          />

        </div>
      </div>
    );
  }
}

export default App;
