import React, { Component } from 'react'
import CommentIcon from '../../icons/CommentIcon'
import { Link } from 'react-router-dom'


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
    const { comment } = this.props
    console.log('xxxx', comment)
    return(
      <div
        className={`feed-item ${this.state.expand ? 'expand' : ''}`}>
        <FeedExpand comment={comment.content}/>
          <div className="feed-card">
            <div className="feed-card-header">
              <div className="feed-user">
                <img src="http://media.haoduoshipin.com/yummy/default-avatar.png"
                  alt="avatar" />
                <div className="feed-user-info">
                  <div className="feed-username">
                    {comment.user.username}
                  </div>
                  <div className="feed-time">
                    周三下午四点
                  </div>
                </div>
              </div>
              <div className="feed-button"
                to="" onClick={this.toggleExpand}>
                <CommentIcon color={this.state.expand ? '#FE5196' : '#D0D0D0'}/>
              </div>
            </div>
            <Link   style={{ 'backgroundImage': `url(${comment.dish.poster})`}}
              to="/dish" className='feed-dish'>
            </Link>
          </div>
      </div>
    )
  }
}

export default FeedItem
