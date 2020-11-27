import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import PropTypes from 'prop-types'

class SingleCard extends Component {
  render() {
    //destructure from the props
    const { urls, user, links, updated_at } = this.props.user
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={urls.small} style={{ height: '18rem' }} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                {/* <Card.Text>
                  {user.bio}
                </Card.Text> */}
                <Button variant="primary" href={links.download}>Download</Button>
           |
              <Button variant="primary" href={user.portfolio_url}>Portfolio</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{updated_at}</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}




//state prop type when you use a prop
//user props was passed down to this from parent component
SingleCard.propTypes = {
  user: PropTypes.object.isRequired
}







export default SingleCard
