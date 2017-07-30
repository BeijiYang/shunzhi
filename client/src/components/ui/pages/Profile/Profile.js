import React , { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import axios from 'axios'
import Settings from '../../../../settings'
import { connect } from 'react-redux'
import './profile.css'
import editIcon from './editIcon.svg'

class Profile extends Component {
  state = {
    edit: false
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
      this.props.dispatch({ type: 'LOAD_USER', user: res.data.user })
      this.setState({
        edit: false
      })
    })

  }

  render() {
    console.log('Profile...', this.props.user)
    let editForm = (
      <form className="profile-form"
        onSubmit={this.updateUser}>
        <input className="profile-slogan-input"
          ref={value => this.sloganInput = value}
          type="text" placeholder={this.props.user.slogan} />
        <button type="submit">保存</button>
      </form>
    )
    const { user } = this.props
    let   slogan   = user.slogan.length === 0 ? this.state.defaultSlogan : user.slogan
    return(
      <div className="profile">
        <TitleHeader title="个人中心" />
        <div className="profile-editable">
          <img className="profile-avatar"
            src={ user.avatar } alt="avatar" />
          <div className="profile-username-slogan">
            <div className="profile-username">
              {user.username}
            </div>
            <div className="profile-slogan">
              { this.state.edit ? editForm : slogan }
            </div>
          </div>
          <div onClick={this.edit}
            className="profile-edit-btn">
            <img src={editIcon} alt="edit" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.account.user
})

export default connect(mapStateToProps)(Profile)
