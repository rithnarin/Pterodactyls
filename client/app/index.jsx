import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import NavBar from 'navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsSearch: [];
    };
    this.search = this.search.bind(this);
  }

  search(query) {
    axios.get('/search', {
      params: {
        search: query
      }
    })
    .then((response) => this.setState({ postsSearch: response }))
    .then(() => console.log('Searched!'));
  }

  render () {
    <div>
      <NavBar search={this.search} />
    </div>
  }
}

render(<App/>, document.getElementById('app'));
