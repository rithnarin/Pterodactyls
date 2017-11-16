import React from 'react';
import {render} from 'react-dom';
import PostingPage from './components/createPosts.jsx';

class App extends React.Component {
  render () {
    return(<PostingPage />);
  }
}

render(<App/>, document.getElementById('app'));
