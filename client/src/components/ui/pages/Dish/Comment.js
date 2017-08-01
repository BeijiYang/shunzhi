import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../../../../settings'
import { connect } from 'react-redux'
import './comment.css'
import moment from 'moment'

class Comment extends Component {

  newComment = (e) => {
    e.preventDefault()
    let content = this.commentInput.value
    if(!content) {
      return
    }
    let user = localStorage.getItem('userId')
    let dish = this.props.dishId
    console.log('newComment....')
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
    console.log('...', comments)
    let hereCommentKeys = Object.keys(comments).filter(id => comments[id].dish._id === this.props.dishId)

    let commentList = hereCommentKeys.map( id => (
        <li className="comment-item"
          key={id}>
          <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
          <div className="comment-detail">
            <div className="username-time">
              <div className="comment-username">
                {comments[id].user.username}
              </div>
              <div className="comment-time">
                {moment(comments[id].createdAt).fromNow()}
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
        <form className="comment-form"
          onSubmit={this.newComment}>
          <input ref={value => this.commentInput = value}
           type="text"  />
         <button type="submit">评论</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all
})

export default connect(mapStateToProps)(Comment)
