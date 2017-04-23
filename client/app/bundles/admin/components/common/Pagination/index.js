import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import perPage from '../../../constants/perPage'
import * as Actions from '../../../actions'

class Pagination extends PureComponent {
  constructor() {
    super()
    this.changePage = this.changePage.bind(this)
  }
  changePage(e) {
    this.props.actions.changePage(e.target.firstChild.data)
  }
  render() {
    const { page, count } = this.props
    const pageClassName = (num) => (
      classNames("pagination-link", { "is-current": num === page })
    )
    const paginateItem = (num) => (
      <a className={pageClassName(num)} onClick={this.changePage}>{num}</a>
    )
    const min = 1
    const max = Math.ceil(count / perPage)
    const step = 2

    let prev = page - step
    if (prev < min) prev = min
    let next = prev + (step * 2)
    if (next > max) next = max
    if ((max - page < step) && (next - min > step * 2)) prev -= step - (max - page)
    if (prev - 1 === min) { prev = min; next -= 1 }
    if (next + 1 === max) { next = max; prev += 1 }

    const pageRange = [...Array(next + 1).keys()].slice(prev)
    return (
      <nav className="pagination is-right">
        <ul className="pagination-list">
          {prev !== min && <li>{paginateItem(min)}</li>}
          {prev > min + 1 && <li><span className="pagination-ellipsis">&hellip;</span></li>}
          {pageRange.map((num) => (
            <li key={num}>{paginateItem(num)}</li>
          ))}
          {next < max - 1 && <li><span className="pagination-ellipsis">&hellip;</span></li>}
          {next !== max && <li>{paginateItem(max)}</li>}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.filters.page
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
