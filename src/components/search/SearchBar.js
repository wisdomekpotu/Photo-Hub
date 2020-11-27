import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

class SearchBar extends Component {

  state = {
    //this will be the initial state of the input
    text: '',

  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  onSubmit = (e) => {
    e.preventDefault();
    //to be passed upwards to the Main app component (axios)
    //passing text value to the App
    console.log(this.state.text)
    this.props.searchUsers(this.state.text)
    //clear form after
    this.setState({ text: '' })


  }


  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <br></br>
            <Form.Control type="text" name="text" placeholder="search..." value={this.state.text} onChange={this.onChange} />
          </Form.Group>
          <Button variant="primary" size="lg" block value="search" type="submit">
            Click Here
          </Button>
        </Form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchUsers: PropTypes.func.isRequired
}


export default SearchBar