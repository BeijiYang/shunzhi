import React, { Component } from 'react'
import CommentIcon from '../../icons/CommentIcon'
import { Link } from 'react-router-dom'
import moment from 'moment'


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
    const { comment } = this.props
    console.log('feed-item', comment)
    return(
      <div
        className={`feed-item ${this.state.expand ? 'expand' : ''}`}>
        <div className="feed-expand">
          {comment.content}
        </div>
        <div className="feed-card">
            <div className="feed-card-header">
              <Link to={`/user/${comment.user._id}`}
                className="feed-user">
                <img src="http://media.haoduoshipin.com/yummy/default-avatar.png"
                  alt="avatar" />
                <div className="feed-user-info">
                  <div className="feed-username">
                    {comment.user.username}
                  </div>
                  <div className="feed-time">
                    {moment(comment.createdAt).fromNow()}
                  </div>
                </div>
              </Link>
              <div className="feed-button"
                to="" onClick={this.toggleExpand}>
                <CommentIcon color={this.state.expand ? '#FE5196' : '#D0D0D0'}/>
              </div>
            </div>
            <Link  style={{ 'backgroundImage': `url(${comment.dish.poster})`}}
              to={`/dish/${comment.dish._id}`} className='feed-dish'>
            </Link>
          </div>
      </div>
    )
  }
}

export default FeedItem
