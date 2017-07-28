import React, { Component } from 'react'

class FeedItem extends Component {

  state = {
    expand: false,
  }

  toggleExpand = () => {
    let expand = this.state.expand === false ? true : false
    this.setState({
      expand
    })
  }

  render() {
    return(
      <div
        className={this.state.expand ? "feed-item expand" : "feed-item"}>
        <div className="feed-card">
          {this.props.username}
          <div className="db-button"
            to="" onClick={this.toggleExpand}>评论</div>
        </div>
        <div className="feed-expand">
          {this.props.comment}
        </div>
      </div>
    )
  }
}

export default FeedItem
