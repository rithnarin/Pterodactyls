import React from 'react';
import {render} from 'react-dom';

import axios from 'axios';
import NavBar from './components/navbar.jsx';
import PostingPage from './components/createPosts.jsx';
import FullPost from './components/fullPost.jsx';
import PostPreviewList from './components/PostPreviewList.jsx';
import PostPreview from './components/postPreview.jsx';
import SignIn from './components/signIn.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPosts: [],
      view: 'home',
      fullPost: [],
      filteredItems: [],
      filtered: false,
      user: {}
    };
    this.search = this.search.bind(this);
    this.loadHome = this.loadHome.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setFullPost = this.setFullPost.bind(this);
    this.isFiltered = this.isFiltered.bind(this);
  }

  componentDidMount() {
    this.loadHome();
    this.setState({
      view: 'home',
      filtered: false
    });
  }

  loadHome() {
    axios.get('/home')
      .then(response => this.setState(
        { frontPosts: response.data.posts, user: response.data.user },
        () => console.log('Home page loaded!', this.state.frontPosts)
      ));
  }

  search(query) {
    let data = this.state.frontPosts.filter(item => item.title.toLowerCase().search(query) !== -1 || item.author.toLowerCase().search(query) !== -1);
    this.setState({
      filteredItems: data,
      filtered: true
    });
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
    console.log('Current user is: ', this.state.user);
    const {view} = this.state;

    if (view === 'home') {
      return <PostPreviewList
        posts={this.state.frontPosts}
        changeView={this.changeView}
        setFullPost={this.setFullPost}
        filteredItems={this.state.filteredItems}
        filtered={this.state.filtered} />;
    } else if (view === 'create') {
      if (this.state.user.google_id) {
        return <PostingPage user={this.state.user}/>;
      } else {
        return <SignIn />;
      }

    } else if (view === 'post') {
      return <FullPost fullPost={this.state.fullPost} />;
    }
  }

  isFiltered() {
    this.setState({
      filtered: true
    });
  }

  render () {
    return (
      <div>
        <NavBar
          user={this.state.user}
          search={this.search}
          changeView={this.changeView}
          isFiltered={this.isFiltered} />
        <br/>
        { this.renderView() }
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
