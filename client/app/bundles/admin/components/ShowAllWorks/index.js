import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import WorksTableHeader from '../WorksTable/WorksTableHeader'
import WorksTableFooter from '../WorksTable/WorksTableFooter'
import WorksTableRow from '../WorksTable/WorksTableRow'
import tableLabel from '../../constants/tableLabel'

class ShowAllWorks extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllWorks()
  }

  render() {
    const { works } = this.props
    return (
      <table className="table with-thumbnail">
        <WorksTableHeader columns={tableLabel.allWorks} />
        <tbody>
          {works && works.map((work) => (
            <WorksTableRow work={work} key={work.id} />
          ))}
        </tbody>
        <WorksTableFooter columns={tableLabel.allWorks} />
      </table>
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
