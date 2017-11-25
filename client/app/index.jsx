import React from 'react';
import {render} from 'react-dom';

import axios from 'axios';
import NavBar from './components/navbar.jsx';
import PostingPage from './components/createPosts.jsx';
import FullPost from './components/fullPost.jsx';
import PostPreviewList from './components/PostPreviewList.jsx';
import PostPreview from './components/postPreview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPosts: [],
      view: 'home',
      fullPost: [],
      filteredItems: [],
      filtered: false
    };
    this.search = this.search.bind(this);
    this.loadHome = this.loadHome.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setFullPost = this.setFullPost.bind(this);
    this.isFiltered = this.isFiltered.bind(this);
  }

  componentWillMount() {
    this.loadHome();
    this.setState({
      view: 'home',
      filtered: false
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
    let data = this.state.frontPosts.filter(item => item.title.toLowerCase().search(query) !== -1 || item.author.toLowerCase().search(query) !== -1);
    this.setState({
      filteredItems: data,
      filtered: true
    });
    console.log(query);
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
      return <PostPreviewList
        posts={this.state.frontPosts}
        changeView={this.changeView}
        setFullPost={this.setFullPost}
        filteredItems={this.state.filteredItems}
        filtered={this.state.filtered} />;
    } else if (view === 'create') {
      return <PostingPage />;
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
