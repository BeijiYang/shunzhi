import React, { Component } from 'react'

class Layout extends Component {
  render(){
    return(
      <div >
        <div className="header">
          HEADER {this.props.children.props.title}
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
