import React, { Component } from 'react';
import Header from './Components/header/header';
import About from './Components/about/about';
import Portfolio from './Components/portfolio/portfolio';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
