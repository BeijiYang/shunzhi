import React , { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import axios from 'axios'
import Settings from '../../../../settings'

// switch demo: http://thevectorlab.net/theme/?theme=Slick%20Lab
class Profile extends Component {
  componentWillMount() {
    this.userId = localStorage.getItem('userId')
    axios.get(`${Settings.host}/user/${this.userId}`).then(
      res => {
        console.log(res.data)
      }
    )
  }
  render() {
    return(
      <div className="profile">
        <TitleHeader title="个人中心" />
      </div>
    )
  }
}

export default Profile
