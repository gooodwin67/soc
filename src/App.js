import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


class App extends React.Component {

  render() {

    return (
      <div className = 'wrap'>
        <Header />
        <div className = 'wrap-content'>
          <Navbar />
          <Profile />
        </div>
      </div>
    )
  }
}

export default App;
