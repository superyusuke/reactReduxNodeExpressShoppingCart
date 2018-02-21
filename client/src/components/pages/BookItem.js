import React from 'react';
import {connect} from 'react-redux';
import {addToCart, updateToCart} from '../../actions/cartActions';
import {Well, Button} from 'react-bootstrap';

class BookItem extends React.Component {
  render() {
    const {title, description, price} = this.props;
    return (
        <Well>
          <h4>{title}</h4>
          <p>{description}</p>
          <h4>usd. {price}</h4>
          <Button onClick={this.handleButtonClick} bsStyle='primary'>Buy
            now</Button>
        </Well>
    );
  }

  handleButtonClick = () => {
    const {id, title, description, price, cart} = this.props;
    const bookToAddToCart = {
      id, title, description, price, quantity: 1,
    };

    if (cart.length > 0) {
      const targetItemIndex = cart.findIndex(item => item.id === id);
      console.log(targetItemIndex);
      if (targetItemIndex < 0) {
        this.props.addToCart([bookToAddToCart]);
        return;
      }

      if (targetItemIndex >= 0) {
        this.props.updateToCart(id, 1);
        return;
      }
    }

    this.props.addToCart([bookToAddToCart]);
  };
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (books) => dispatch(addToCart(books)),
    updateToCart: (id, unit) => dispatch(updateToCart(id, unit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);