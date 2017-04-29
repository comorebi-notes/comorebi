import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import * as Actions from '../../../actions'

class ModalCard extends PureComponent {
  componentWillUnmount() {
    this.props.actions.toggleModal(false)
  }
  render() {
    const { actions, children, modal } = this.props
    const modalClassName = classNames("modal", { "is-active": modal })
    return (
      <div className="modal-wrapper">
        <div className={modalClassName}>
          <div className="modal-background" onClick={actions.toggleModal} />
          <div className="modal-card">
            {children && children.map((child) => (
              React.cloneElement(child, { actions, key: child.props.children })
            ))}
          </div>
        </div>
      </div>
    )
  }
}

ModalCard.Header = ({ children, actions }) => (
  <header className="modal-card-head">
    <p className="modal-card-title">
      {children}
    </p>
    <button type="button" className="delete" onClick={actions.toggleModal} />
  </header>
)

ModalCard.Body = ({ children }) => (
  <section className="modal-card-body">{children}</section>
)

ModalCard.Footer = ({ children }) => (
  <footer className="modal-card-foot">{children}</footer>
)

const mapStateToProps = (state) => ({
  modal: state.main.modal
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard)
