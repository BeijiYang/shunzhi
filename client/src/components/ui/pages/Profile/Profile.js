import React , { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import axios from 'axios'
import Settings from '../../../../settings'
import { connect } from 'react-redux'

class Profile extends Component {
  state = {
    edit: false,
    defaultSlogan: '个性签名'
  }

  edit = () => {
    this.setState({
      edit: true
    })
  }



  componentWillMount() {
    this.userId = localStorage.getItem('userId')
    axios.get(`${Settings.host}/user/${this.userId}`).then(
      res => {
        console.log(res.data.user)
        let { user} = res.data
        this.props.dispatch({ type: 'LOAD_USER', user })
      }
    )
  }

  updateUser = (e) => {
    e.preventDefault()
    let slogan = this.sloganInput.value
    let data = {
      username: this.props.user.username,
      slogan
    }
    console.log(data)
    axios.put(`${Settings.host}/user`, data).then( res => {
      console.log(res.data)
    })
  }

  render() {
    console.log('Profile...', this.props.user)
    let editForm = (
      <form onSubmit={this.updateUser}>
        <input type="text" placeholder={this.props.user.username} />
        <input ref={value => this.sloganInput = value}
          type="text" placeholder={this.state.defaultSlogan} />
        <button type="submit">提交</button>
      </form>
    )

    const { user } = this.props
    return(
      <div className="profile">
        <TitleHeader title="个人中心" />
        <div className="profile-editable">
          <div className="profile-username">
            { user.username }
            { user.slogan.length === 0 ? this.state.defaultSlogan : user.slogan }
          </div>
          <div onClick={this.edit}
            className="profile-edit-btn">
            edit
          </div>
          { this.state.edit ? editForm : ''}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.account.user
})

export default connect(mapStateToProps)(Profile)
