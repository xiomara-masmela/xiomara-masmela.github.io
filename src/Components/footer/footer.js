import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://twitter.com/thisisxiomara"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/xiomara-masmela/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/xio_mm_/"><i className="fa fa-instagram" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2014 CeeVee</li>
              <li>Design by Xio</li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}

      </React.Fragment>
    );
  }
}