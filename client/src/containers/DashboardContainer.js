import React , { Component } from 'react'
import Dashboard from '../components/pages/DashBoard/DashBoard'
import { connect } from 'react-redux'
import { setTitle } from '../redux/actions'

class DashBoardContainer extends Component {
  componentWillMount () {
    this.props.setTitle("News")
  }

  render() {
    const { comments, currentUser } = this.props
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

export default connect(mapStateToProps, { setTitle })(DashBoardContainer)
