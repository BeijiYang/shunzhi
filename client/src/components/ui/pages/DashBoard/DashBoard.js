import React , { Component } from 'react'
import './dashboard.css'
import FeedItem from  './FeedItem'
import { connect } from 'react-redux'

class Dashboard extends Component {

  render() {
    const { comments } = this.props
    console.log('Dashboard', comments)
    // FIXME: dashboard 这里其实就是显示所有评论，附带上它们对应的 dish 而已
    const cards = [
      {username: 'Billie Zhang', comment: '真是好吃'},
      {username: 'Peter Wang', comment: '不错'},
      {username: '李逵', comment: '3星'},
      {username: '李逵', comment: '3星'},
    ]
    const cardList = cards.map((c, index) => {
      return (
        <FeedItem key={index} comment={c.comment} username={c.username} />
      )
    })
    return(
      <div className="dashboard">
        <div className="feed-wrap">
          {cardList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all
})

export default connect(mapStateToProps)(Dashboard)
