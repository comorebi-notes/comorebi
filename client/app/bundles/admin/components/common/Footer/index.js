import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
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
                style={{ marginLeft: ".3em" }}
              >
                <i className="fa fa-twitter" />
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
