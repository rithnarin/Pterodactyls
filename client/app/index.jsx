import React from 'react';
import {render} from 'react-dom';
<<<<<<< HEAD
import PostingPage from './components/createPosts.jsx';
import axios from 'axios';
import NavBar from './components/navbar.jsx';
=======

import axios from 'axios';
import NavBar from './components/navbar.jsx';
import PostingPage from './components/createPosts.jsx';

>>>>>>> 3abbeb63263c4e1ee58cde79652042e41885d3fb

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
<<<<<<< HEAD
    return
    (
=======
    return (
>>>>>>> 3abbeb63263c4e1ee58cde79652042e41885d3fb
      <div>
        <NavBar search={this.search} />
        <PostingPage />
      </div>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 3abbeb63263c4e1ee58cde79652042e41885d3fb
  }
}

render(<App/>, document.getElementById('app'));
