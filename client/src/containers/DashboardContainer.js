import React , { Component } from 'react'
import Dashboard from '../components/pages/DashBoard/DashBoard'
import { connect } from 'react-redux'


class DashBoardContainer extends Component {

  render() {
    const { comments, currentUser } = this.props

    return(
      <Dashboard comments={comments} />
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all,
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps)(DashBoardContainer)
