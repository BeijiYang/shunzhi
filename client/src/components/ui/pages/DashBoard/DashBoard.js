import React , { Component } from 'react'
import './dashboard.css'
import FeedItem from  './FeedItem'

class Dashboard extends Component {




  render() {
    const cards = [
      {name: 'Billie Zhang', content: '真是好吃'},
      {name: 'Billie Zhang', content: '真是好吃'}
    ]
    const cardList = cards.map((c, index) => {
      return (
        <FeedItem key={index} name={c.name} content={c.content} />
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
