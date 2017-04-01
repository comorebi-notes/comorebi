import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import WorksTableCaptions from '../WorksTable/WorksTableCaptions'
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
      <table className="table works with-thumbnail">
        <thead>
          <WorksTableCaptions columns={tableLabel.allWorks} />
        </thead>

        <tbody>
          {works && works.map((work) => (
            <WorksTableRow work={work} key={work.id} />
          ))}
        </tbody>

        <tfoot>
          <WorksTableCaptions columns={tableLabel.allWorks} />
        </tfoot>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllWorks)
