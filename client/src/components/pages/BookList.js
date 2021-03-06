import React from 'react';
import Cart from './Cart';
import BookItem from './BookItem';
import BookForm from './BookForm';

import {Grid, Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';

class BookList extends React.Component {
  render() {
    const {books} = this.props;
    const bookList = books.map(book => {
      return (<BookItem key={book.id}  {...book}/>);
    });

    return (
        <Grid>
          <Cart/>
          <Row>
            <Col xs={12} sm={6}>
              <BookForm/>
            </Col>
            <Col xs={12} sm={6}>
              {bookList}
            </Col>
          </Row>
        </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(BookList);