import React , { Component } from 'react'
import Dashboard from '../components/pages/DashBoard/DashBoard'
import { connect } from 'react-redux'


class DashBoardContainer extends Component {

  render() {
    const { comments, currentUser } = this.props
    console.log('currentUser---', currentUser.followings)
    console.log('comments----', comments)
    const friendComments = comments.filter(comment => {
      return currentUser.followings.includes(comment.user._id)
    })

    return(
      <Dashboard comments={friendComments} />
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all,
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps)(DashBoardContainer)
