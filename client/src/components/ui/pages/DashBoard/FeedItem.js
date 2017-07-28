import React, { Component } from 'react'


const FeedCard = ({username, toggleExpand}) => (
  <div className="feed-card">
    {username}
    <div className="db-button"
      to="" onClick={toggleExpand}>评论</div>
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
        <FeedCard toggleExpand={this.toggleExpand}/>
        <FeedExpand comment={this.props.comment}/>
      </div>
    )
  }
}

export default FeedItem
