import React , { Component } from 'react'
import './dashboard.css'
import FeedItem from  './FeedItem'
import { connect } from 'react-redux'

class Dashboard extends Component {

  render() {
    const { comments } = this.props

    const cardList = Object.keys(comments).reverse().map(id => {
      return (
        <FeedItem key={id} comment={comments[id]} />
      )
    })
    return(
      <div className="dashboard">
        <div className="feed-wrap">
          {Object.keys(comments).length === 0 ? '暂无好友更新' : cardList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all
})

export default connect(mapStateToProps)(Dashboard)
