import React , { Component } from 'react'
import './dashboard.css'
import FeedItem from  './FeedItem'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  render() {
    const { comments } = this.props
    let commentsCopy = comments.slice()
    const cardList = commentsCopy.reverse().map(comment => {
      return (
        <FeedItem key={comment._id} comment={comment} />
      )
    })

    const noUpdate = (
      <div className="no-update">
        暂无好友更新，可以直接去 <Link to="/dishes">购物区</Link> 转转。
      </div>
    )
    return(
      <div className="dashboard">
        <div className="feed-wrap"
             style={{ 'minHeight': `${window.innerHeight -80}px` }}
          >
          {comments.length === 0 ? noUpdate : cardList}
        </div>
      </div>
    )
  }
}

export default Dashboard
