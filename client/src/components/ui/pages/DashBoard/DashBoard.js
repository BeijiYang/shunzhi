import React , { Component } from 'react'
import './dashboard.css'
import FeedItem from  './FeedItem'
import { connect } from 'react-redux'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  render() {
    const { comments } = this.props
    console.log('dashboard', comments)
    const cardList = Object.keys(comments).reverse().map(id => {
      return (
        <FeedItem key={id} comment={comments[id]} />
      )
    })

    const noUpdate = (
      <div className="no-update">
        暂无好友更新，可以直接去 <Link to="/dishes">购物区</Link> 转转。
      </div>
    )
    console.log('dashboard', window.innerHeight)
    return(
      <div className="dashboard">
        <TitleHeader title="好友更新" />
        <div className="feed-wrap"
             style={{ 'minHeight': `${window.innerHeight -80}px` }}
          >
          {Object.keys(comments).length === 0 ? noUpdate : cardList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all
})

export default connect(mapStateToProps)(Dashboard)
