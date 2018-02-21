import React from 'react';
import {connect} from 'react-redux';
import {updateToCart, deleteFromCart} from '../../actions/cartActions';
import {
  Row,
  Col,
  Panel,
  Well,
  ButtonGroup,
  Button,
  Label,
} from 'react-bootstrap';

class Cart extends React.Component {
  renderCart() {
    const {cart} = this.props;
    const cartItems = cart.map((item) => {
      return (
          <Panel>
            <Panel.Body>
              <Row>
                <Col xs={12} sm={4}>
                  <h6>{item.title}</h6>
                </Col>
                <Col xs={12} sm={2}>
                  <h6>usd. {item.price}</h6>
                </Col>
                <Col xs={12} sm={2}>
                  <h6>qty. <Label bsSize='big' bsStyle="success">{item.quantity}</Label>
                  </h6>
                </Col>
                <Col xs={12} sm={4}>
                  <ButtonGroup style={{minWidth: '300px'}}>
                    <Button onClick={() => this.onDecrement(
                        item.id)} bsStyle='default' bsSize='small'>-</Button>
                    <Button onClick={() => this.onIncrement(
                        item.id)} bsStyle='default' bsSize='small'>+</Button>
                    <Button onClick={() => this.onDelete(
                        item.id)} bsStyle='danger' bsSize='small'>DELETE</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Panel.Body>
          </Panel>
      );
    });
    return (
        <Panel bsStyle='primary'>
          <Panel.Heading>Cart</Panel.Heading>
          <Panel.Body>
            {cartItems}
          </Panel.Body>
        </Panel>
    );
  }

  render() {
    const {cart} = this.props;
    if (cart.length > 0) {
      return this.renderCart();
    }

    return (
        <Panel bsStyle='primary'>
          <Panel.Heading>Cart</Panel.Heading>
        </Panel>
    );
  }

  onIncrement = (id) => {
    this.props.updateToCart(id, 1);
  };

  onDecrement = (id) => {
    const {cart} = this.props;
    const targetIndex = cart.findIndex(item => item.id === id);
    if (cart[targetIndex].quantity < 1) {
      return;
    }
    this.props.updateToCart(id, -1);
  };

  onDelete = (id) => {
    this.props.deleteFromCart(id);
  };
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateToCart: (id, unit) => dispatch(updateToCart(id, unit)),
    deleteFromCart: id => dispatch(deleteFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);