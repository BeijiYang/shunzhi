import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../../../../settings'
import { connect } from 'react-redux'

class Comment extends Component {

  newComment = (e) => {
    e.preventDefault()
    let content = this.commentInput.value
    let userId = localStorage.getItem('userId')
    axios.post(`${Settings.host}/comment`, { content, userId }).then(res => {
      const { comment } = res.data
      this.props.dispatch({ type: 'ADD_COMMENT', comment })
      this.commentInput.value = ''
    })
  }

  render(){
    return(
      <div className="comment">
        <form onSubmit={this.newComment}>
          <input ref={value => this.commentInput = value}
           type="text" placeholder="输入评论内容" />
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

export default connect(null)(Comment)
