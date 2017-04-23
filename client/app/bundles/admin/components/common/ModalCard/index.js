import React, { PureComponent } from 'react'
import classNames from 'classnames'

class ModalCard extends PureComponent {
  render() {
    const { children, active, handleClick } = this.props
    return (
      <div className={classNames("modal", { "is-active": active })}>
        <div className="modal-background" onClick={handleClick} />
        <div className="modal-card">
          {children}
        </div>
      </div>
    )
  }
}

ModalCard.Header = ({ children, handleClick }) => (
  <header className="modal-card-head">
    <p className="modal-card-title">
      {children}
    </p>
    <button type="button" className="delete" onClick={handleClick} />
  </header>
)

ModalCard.Body = ({ children }) => (
  <section className="modal-card-body">
    {children}
  </section>
)

ModalCard.Footer = ({ children }) => (
  <footer className="modal-card-foot">
    {children}
  </footer>
)

export default ModalCard
