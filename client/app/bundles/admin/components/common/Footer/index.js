import React, { Component } from 'react'
import footerLinks from '../../../constants/footerLinks'

export default class Footer extends Component {
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
              {
                footerLinks.map((link, index) => (
                  <a
                    href={link.url}
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <i className={`fa fa-${link.icon}`} />
                  </a>
                ))
              }
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
