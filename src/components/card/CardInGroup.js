import React, { Component } from 'react'
import SingleCard from './SingleCard'
import PropTypes from 'prop-types'

class CardInGroup extends Component {
  render() {
    return (
      //.map loops through an array to return another array from that array
      <div style={groupStyle}>
        {this.props.names.map((user) => (
          <SingleCard key={user.id} user={user} />
        ))}
      </div>
    )
  }
}


const groupStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2px'
}

//state prop type when you use a prop
CardInGroup.propTypes = {
  names: PropTypes.array.isRequired
}


export default CardInGroup
