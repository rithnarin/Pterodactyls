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
      frontPosts: [],
      view: 'home',
      fullPost: []
    };
    this.search = this.search.bind(this);
    this.loadHome = this.loadHome.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setFullPost = this.setFullPost.bind(this);
  }

  componentWillMount() {
    this.loadHome();
    this.setState({
      view: 'home'
    });
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

  changeView(view) {
    this.setState({
      view: view
    });
  }

  setFullPost(post) {
    this.setState({
      fullPost: post
    });
  }

  renderView() {
    const {view} = this.state;

    if (view === 'home') {
      return this.state.frontPosts.map(item => {
        return <PostPreview
          post={item}
          changeView={this.changeView}
          setFullPost={this.setFullPost} />
      });
    } else if (view === 'create') {
      return <PostingPage />
    } else if (view === 'post') {
      return <FullPost fullPost={this.state.fullPost} />
    }
  }

  render () {
    return (
      <div>
        <NavBar
          search={this.search}
          changeView={this.changeView} />
        <br/>
        { this.renderView() }
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
