import React, { Component } from 'react'
import './alert-box.css'
import store from '../../../../redux/store'
import { connect } from 'react-redux'

class AlertBox extends Component {

  render() {
    return(
      <div className={this.props.showAlert ? "alert-box show": "alert-box"}>
        <div className="alert-box-card">
          { this.props.alertMessage }
          <div
            onClick={() => {
              store.dispatch({ type: 'HIDE_ALERT' })
            }}
            className="alert-actions">
            关闭
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showAlert: state.account.showAlert,
  alertMessage: state.account.alertMessage
})

export default connect(mapStateToProps)(AlertBox)
