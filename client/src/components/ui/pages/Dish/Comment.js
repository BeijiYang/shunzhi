import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../../../../settings'
import { connect } from 'react-redux'
import './comment.css'

class Comment extends Component {

  newComment = (e) => {
    e.preventDefault()
    let content = this.commentInput.value
    let user = localStorage.getItem('userId')
    axios.post(`${Settings.host}/comment`, { content, user }).then(res => {
      const { comment } = res.data
      console.log('newComment...', res.data)
      this.props.dispatch({ type: 'ADD_COMMENT', comment })
      this.commentInput.value = ''
    })
  }

  render(){
    let { comments } = this.props
    console.log('...', comments)
    let commentList = Object.keys(comments).map( id => (
        <li className="comment-item"
          key={id}>
          <img src={comments[id].avatar} alt="avatar" />
          <div className="comment-detail">
            <div className="username-time">
              <div className="comment-username">
                {comments[id].userId}
              </div>
              <div className="comment-time">
                time
              </div>
            </div>
            <div className="comment-content">
              {comments[id].content}
            </div>
          </div>
        </li>
      ))
    return(
      <div className="comment">
        {commentList}
        <form onSubmit={this.newComment}>
          <input ref={value => this.commentInput = value}
           type="text" placeholder="输入评论内容" />
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all
})

export default connect(mapStateToProps)(Comment)
