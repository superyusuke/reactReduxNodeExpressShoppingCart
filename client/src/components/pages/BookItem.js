import React from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';

class BookItem extends React.Component {
  render() {
    const {title, description, price} = this.props;
    return (
        <Well>
          <Row>
            <Col xs={12}>
              <h4>{title}</h4>
              <p>{description}</p>
              <h4>usd. {price}</h4>
              <Button bsStyle='primary'>Buy now</Button>
            </Col>
          </Row>
        </Well>
    );
  }
}

export default BookItem;