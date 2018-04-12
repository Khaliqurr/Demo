import React, { Component } from 'react';
import styles from './App.css';
import Logo from './components/Logo/Logo';
import { BrowserRouter} from 'react-router-dom';
import HomePage from './components/pages/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className={styles.App}>
      <header className={styles.header}>
      <Logo />
      
        </header>
          <HomePage />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
