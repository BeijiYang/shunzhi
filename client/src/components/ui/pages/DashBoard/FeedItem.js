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
    let expand = this.state.expand ? false : true
    this.setState({
      expand
    })
  }

  render() {
    return(
      <div onClick={this.toggleExpand}
        className={this.state.expand ? "feed-item expand" : "feed-item"}>
        <div className="feed-card">
          {this.props.name}
          <Link to="" onClick={() => this.toggleExpand('like')}>赞</Link>
          <Link to="" onClick={() => this.toggleExpand('comment')}>评论</Link>
        </div>
        <div className="feed-expand">
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default FeedItem
