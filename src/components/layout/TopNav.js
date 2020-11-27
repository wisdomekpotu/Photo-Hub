import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

class TopNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src='https://unsplash.com/favicon-16x16.png' alt="" />
          {' '}
    Unsplash Image Search React
    </Navbar.Brand>
      </Navbar>
    )
  }
}

export default TopNav
