import React, { Component } from 'react'

class FeedItem extends Component {

  state = {
    expand: false
  }
  toggleExpand = () => {
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
        </div>

        <div className="feed-expand">
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default FeedItem
