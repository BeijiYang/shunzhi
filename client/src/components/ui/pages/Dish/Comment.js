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
    let dish = this.props.dishId
    axios.post(`${Settings.host}/comment`, { content, user, dish }).then(res => {
      console.log('newComment...', res.data)
      axios.get(`${Settings.host}/comments`).then(
        res => {
          const { comments } = res.data
          this.props.dispatch({ type: 'LOAD_COMMENTS', comments })
        }
      )
      this.commentInput.value = ''
    })
  }

  render(){
    let { comments } = this.props
    console.log('....', comments)
    let commentList = Object.keys(comments).map( id => (
        <li className="comment-item"
          key={id}>
          <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
          <div className="comment-detail">
            <div className="username-time">
              <div className="comment-username">
                {comments[id].user.username}
              </div>
              <div className="comment-time">
                {comments[id].createdAt}
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
