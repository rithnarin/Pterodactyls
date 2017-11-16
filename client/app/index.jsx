import React from 'react';
import {render} from 'react-dom';
import PostingPage from './components/createPosts.jsx';
import axios from 'axios';
import NavBar from './components/navbar.jsx';

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
    return
    (
      <div>
        <NavBar search={this.search} />
        <PostingPage />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
