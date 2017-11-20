import React from 'react';
import {render} from 'react-dom';

import axios from 'axios';
import NavBar from './components/navbar.jsx';
import PostingPage from './components/createPosts.jsx';
import FullPost from './components/fullPost.jsx';
import PostPreview from './components/postPreview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPosts: []
    };
    this.search = this.search.bind(this);
    this.loadHome = this.loadHome.bind(this);
  }

  componentWillMount() {
    this.loadHome();
  }

  loadHome() {
    axios.get('/home')
      .then(response => this.setState(
        { frontPosts: response.data },
        () => console.log('Home page loaded!')
      ));
  }

  search(query) {
    axios.get('/search', {
      params: { search: query }
    })
      .then(response => this.setState(
        { frontPosts: response.data },
        () => console.log('Searched!')
      ));
  }

  render () {
    return (
      <div>
        <NavBar search={this.search}/>
        <br/>
        {this.state.frontPosts.map((item, index) => {
          return (<PostPreview post={item} key={index} />);
        })}
        <PostingPage />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
