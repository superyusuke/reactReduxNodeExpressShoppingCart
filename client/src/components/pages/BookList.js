import React from 'react';
import BookItem from './BookItem';
import {Grid, Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';

class BookList extends React.Component {
  render() {
    const bookList = this.props.books.map(book => {
      return (
          <Col key={book.id}  xs={12} sm={6} md={4}>
            <BookItem {...book}/>
          </Col>
      );
    });

    return (
        <Grid>
          <Row>
            {bookList}
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