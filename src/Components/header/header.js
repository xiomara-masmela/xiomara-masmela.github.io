import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;  
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="home">
      <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Xio</h1>
            <h3 className="main-subtitle">Front End Developer.</h3><a className="smoothscroll link" href="#about">About me</a>.
            <hr />
            <ul className="social">
              <li><a href="https://twitter.com/thisisxiomara"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/xiomara-masmela/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/xio_mm_/"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}