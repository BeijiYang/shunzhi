import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { connect } from 'react-redux'

class User extends Component {
  render(){
    const { userId } = this.props.match.params
    const { users } = this.props
    console.log('users', users)
    return(
      <div className="user">
        <TitleHeader title="peter" />
        { userId }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.all
})

export default connect(mapStateToProps)(User)
