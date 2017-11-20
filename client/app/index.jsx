import React from 'react';
import {render} from 'react-dom';

import axios from 'axios';
import NavBar from './components/navbar.jsx';
import PostingPage from './components/createPosts.jsx';
import FullPost from './components/fullPost.jsx';
import postPreview from './components/postPreview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPosts: []
    };
    this.search = this.search.bind(this);
  }

  componentWillMount() {
    this.loadHome();
  }

  loadHome() {
    axios.get('/home')
      .then((response) => this.setState({ frontPosts: response }))
      .then(() => console.log('Home page loaded!'));
  }

  search(query) {
    axios.get('/search', {
      params: {
        search: query
      }
    })
      .then((response) => this.setState({ frontPosts: response }))
      .then(() => console.log('Searched!'))
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <div>
        <NavBar search={this.search}/>
        <br/>
        {this.state.frontPosts.map(item => <postPreview post={item} />)}
        <PostingPage />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
