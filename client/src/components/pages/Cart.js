import React from 'react';
import {connect} from 'react-redux';
import {updateToCart, deleteFromCart} from '../../actions/cartActions';
import {
  Row,
  Col,
  Panel,
  ButtonGroup,
  Button,
  Label,
  Modal,
} from 'react-bootstrap';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  renderCart() {
    const {cart, totalQuantity, totalAmount} = this.props;
    console.log(cart);
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
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Thank you!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Your order has been saved.</h4>
                <p>You will receive an email confirmation.</p>
              </Modal.Body>
              <Modal.Footer>
                <Col xs={6}>
                  <h6>total $: {totalAmount}</h6>
                </Col>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Panel>
      );
    });
    return (
        <Panel bsStyle='primary'>
          <Panel.Heading>Cart</Panel.Heading>
          <Panel.Body>
            {cartItems}
            <h6>Total quantity: {totalQuantity}</h6>
            <h6>Total amount $: {totalAmount}</h6>
            <Button onClick={this.open.bind(
                this)} bsStyle="success" bsSize="small">
              PROCEED TO CHECKOUT
            </Button>
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

  open = () => {
    this.setState({showModal: true});
  };

  close = () => {
    this.setState({showModal: false});
  };

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

const calculateTotalQuantity = cartItem => {
  return cartItem.map(item => item.quantity).reduce((a, b) => {return a + b;}, 0);
};

const calculateTotalAmount = cartItem => {
  return cartItem.map(item => item.quantity * item.price).reduce((a, b) => {return a + b;}, 0);
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalQuantity: calculateTotalQuantity(state.cart),
    totalAmount: calculateTotalAmount(state.cart),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateToCart: (id, unit) => dispatch(updateToCart(id, unit)),
    deleteFromCart: id => dispatch(deleteFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);