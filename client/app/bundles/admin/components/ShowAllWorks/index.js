import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import WorksTableCaptions from '../WorksTable/WorksTableCaptions'
import WorksTableRow from '../WorksTable/WorksTableRow'
import Loading from '../common/LoadingTableRow'
import tableLabel from '../../constants/tableLabel'

class ShowAllWorks extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getAllWorksAsync("showAllWorks")
  }

  render() {
    const { loading, works } = this.props
    const captions = !loading && <WorksTableCaptions columns={tableLabel} />

    return (
      <table className="table works with-thumbnail">
        <thead>{captions}</thead>

        <tbody>
          {loading ? (
            <Loading colspan={tableLabel.length} />
          ) : works && works.map((work) => (
            <WorksTableRow work={work} key={work.id} />
          ))}
        </tbody>

        <tfoot>{captions}</tfoot>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.main.loading.showAllWorks,
  works: state.main.works
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllWorks)
