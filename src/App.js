import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {
  constructor() {
    super();
    this.state = {
      target: 'home',
    }
  }

  componentDidMount(){
   const ele = document.getElementById('ipl-progress-indicator')
   if(ele){
     setTimeout(() => {
       ele.classList.add('available')
       setTimeout(() => {
         ele.outerHTML = ''
       }, 2000)
     }, 1000)
   }
 }

  render() {
    const onClick = (e) => {
      this.setState({target: e.target.id});
    }

    return (
      <div className="App">

        <Navbar onClick={onClick}/>

        <div className='page'>
          <div className='container-fluid top-padding'>
            <div className='col-md-2'>
              <ProfileCard />
            </div>
            <div className='col-md-8'>
              <Content contentId={this.state.target}/>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
