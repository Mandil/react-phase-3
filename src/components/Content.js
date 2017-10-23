import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Content extends Component {
  constructor(props) {
    super(props);
    let page = this.changePage(props);
    this.state = {
      page: page,
    }
  }

  componentWillReceiveProps(newProps){
    let newPage = this.changePage(newProps);
    if (newPage !== this.state.page){
      this.setState({page: newPage});
    }
  }

  changePage(props){
    if (props.contentId === 'contact'){
      return <Contact />;
    } else if (props.contentId === 'about') {
      return <About />;
    } else {
      return <Home />;
    }
  }

  render(){
    return(<div>
      {this.state.page}
      </div>)
  }
}

export default Content;
