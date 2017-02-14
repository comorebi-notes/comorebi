import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="footer is-admin">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <small>
                Copyright &copy; 2017 comorebi notes All Rights Reserved.
              </small>
            </p>
            <p>
              <a
                href="https://github.com/kero-uzura/comorebi"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className="fa fa-github" />
              </a>
              <a
                href="https://twitter.com/kero_BIRUGE"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                href="mailto:biruge@biruge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className="fa fa-envelope" />
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
