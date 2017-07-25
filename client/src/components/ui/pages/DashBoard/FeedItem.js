import React, { Component } from 'react'

class FeedItem extends Component {

  state = {
    expand: false,
    content: ''
  }

  toggleExpand = (option) => {
    console.log('toggleExpand...', option)
    let expand = this.state.expand === false ? true : false
    let content = option
    this.setState({
      expand,
      content
    })
  }

  render() {
    console.log('render...this.props.data.like', this.props.data.like)
    let likeButton = ''
    if(this.props.data.like !== undefined ) {
      likeButton = (
        <div className="db-button"
          to="" onClick={() => this.toggleExpand('like')}>赞</div>
      )
    }
    let commentButton = ''
    if(this.props.data.comment !== undefined ) {
      commentButton = (
        <div className="db-button"
          to="" onClick={() => this.toggleExpand('comment')}>评论</div>
      )
    }
    return(
      <div
        className={this.state.expand ? "feed-item expand" : "feed-item"}>
        <div className="feed-card">
          {this.props.data.username}
          {likeButton}
          {commentButton}
        </div>
        <div className="feed-expand">
          {this.props.data.like}
        </div>
      </div>
    )
  }
}

export default FeedItem
