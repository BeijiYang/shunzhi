import React, { Component } from 'react'
import CommentIcon from './CommentIcon'


const FeedCard = ({username, toggleExpand}) => (
  <div className="feed-card">
    <div className="feed-card-header">
      <div className="feed-user">
        <img src="http://media.haoduoshipin.com/yummy/default-avatar.png"
          alt="avatar" />
        <div className="feed-user-info">
          <div className="feed-username">
            {username}
          </div>
          <div className="feed-time">
            周三下午四点
          </div>
        </div>
      </div>
      <div className="feed-button"
        to="" onClick={toggleExpand}>
        <CommentIcon color={'#D0D0D0'}/>
      </div>
    </div>
  </div>
)

const FeedExpand = ({comment}) => (
  <div className="feed-expand">
    {comment}
  </div>
)

class FeedItem extends Component {

  state = {
    expand: false,
  }

  toggleExpand = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    return(
      <div
        className={`feed-item ${this.state.expand ? 'expand' : ''}`}>
        <FeedExpand comment={this.props.comment}/>
        <FeedCard username={this.props.username} toggleExpand={this.toggleExpand}/>
      </div>
    )
  }
}

export default FeedItem
