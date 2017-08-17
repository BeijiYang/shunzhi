import React, { Component } from 'react'
import './layout.css'


class Layout extends Component {
  render(){
    return(
      <div className="layout">
        <div className="title-header">
          { this.props.children.props.title }
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
