import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    },
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.search(this.state.searchText);
    }
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    return (<nav className='navbar navbar-inverse navbar-fixed-top app-navbar'>
      <div className="container">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">KUYiK</a>
        </div>
        <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
          <li><a href="#" onClick={() => this.props.changeView('create')}>Create a Post </a></li>
          <form className="navbar-form navbar-right app-search">
            <div className="form-group">
              <input
                className="form-control"
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                placeholder="Search..">
              </input>
            </div>
          </form>
          <li><a href="/">Sign In </a></li>
          <li><a href="/">Sign Up</a></li>
        </ul>
      </div>
    </nav>);
  }

}

export default NavBar;
