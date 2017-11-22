import React from 'react';
import axios from 'axios';

const devStyle = {
  border: '1px solid black',
  padding: '2px',
  margin: '2px'
};

/* expected props:
   user, eventually, but for now we have the user type their name
*/

class PostingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorInputText: '',
      locationInputText: '',
      titleInputText: '',
      subtitleInputText: '',
      mainInputText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let key = e.target.name + 'InputText';
    this.setState({
      [key]: e.target.value
    });
  }

  handleSubmit() {
    let newPost = {
      author: this.state.authorInputText,
      location: this.state.locationInputText,
      title: this.state.titleInputText,
      subtitle: this.state.subtitleInputText,
      main: this.state.mainInputText
    };
    console.log(newPost);
    axios.post('/posts', newPost);
  }

  render() {
    return (<div style={devStyle}>
      <div style={devStyle}>
        <span>Author name:
          <input name="author"
            className="authorInput"
            onChange={e => this.handleChange(e)}>
          </input>
        </span>
        <span>Location for post:
          <input name="location"
            className="locationInput" 
            onChange={e => this.handleChange(e)}>
          </input>
        </span>
      </div>
      <div style={devStyle}>
        Title:
        <input name="title"
          className="titleInput"
          onChange={e => this.handleChange(e)}>
        </input>
      </div>
      <div style={devStyle}>
        Subtitle:
        <input name="subtitle"
          className="subtitleInput"
          onChange={e => this.handleChange(e)}>
        </input>
      </div>
      <div style={devStyle}>
        Your story:
        <textarea name="main"
          className="mainInput"
          onChange={e => this.handleChange(e)}>
        </textarea>
      </div>
      <div style={devStyle}>IMAGE UPLOAD COMPONENT HERE</div>
      <div>
        <button name="submit-post" onClick={this.handleSubmit}>
        Submit
        </button>
      </div>
    </div>);
  }
}

export default PostingPage;
