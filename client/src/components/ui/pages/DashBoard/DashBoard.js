import React , { Component } from 'react'
import './dashboard.css'
import FeedItem from  './FeedItem'

class Dashboard extends Component {

  render() {
    const cards = [
      {username: 'Billie Zhang', comment: '真是好吃'},
      {username: 'Peter Wang', comment: '不错'},
      {username: '李逵', comment: '3星'},
    ]
    const cardList = cards.map((c, index) => {
      return (
        <FeedItem key={index} comment={c.comment} username={c.username} />
      )
    })
    return(
      <div className="dashboard">
        <div className="dashboard-content">
          {cardList}
        </div>
      </div>
    )
  }
}

export default Dashboard
