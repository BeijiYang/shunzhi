import React, { Component } from 'react'

import {
  Link
} from 'react-router-dom'

class FeedItem extends Component {

  state = {
    expand: false
  }

  toggleExpand = (option) => {
    console.log('toggleExpand...', option)
    let expand
    expand = this.state.expand === false ? true : false
    this.setState({
      expand
    })
  }


  render() {
    return(
      <div
        className={this.state.expand ? "feed-item expand" : "feed-item"}>
        <div className="feed-card">
          {this.props.name}
          <div className="db-button"
            to="" onClick={this.toggleExpand}>赞</div>
          <div className="db-button"
            to="" onClick={this.toggleExpand}>评论</div>
        </div>
        <div className="feed-expand">
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default FeedItem
