import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Content extends Component {

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
      {this.changePage(this.props)}
      </div>)
  }
}

export default Content;
