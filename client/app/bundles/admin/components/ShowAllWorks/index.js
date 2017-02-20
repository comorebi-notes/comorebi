import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import WorksCard from '../Card/WorksCard'

class ShowAllWorks extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllWorks()
  }

  render() {
    const { works } = this.props
    return (
      <div>
        {works && works.map((work) => (
          <WorksCard work={work} key={work.id} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  works: state.main.works
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAllWorks)
