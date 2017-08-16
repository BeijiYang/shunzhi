import React from 'react'
import './title-header.css'

// FIXME: use 'layout components'
// as put here: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
const TitleHeader = ({ title }) => (
  <div className="title-header">
    { title }
  </div>
)


export default TitleHeader
