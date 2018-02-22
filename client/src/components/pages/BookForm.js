import React from 'react';
import {connect} from 'react-redux';
import {
  Well,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Panel,
} from 'react-bootstrap';

import {postBooks, deleteBook} from '../../actions/bookActions';

class BookForm extends React.Component {
  render() {
    const {books} = this.props;
    return (
        <Well>
          <Panel>
            <Panel.Body>
              <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>
                <FormControl inputRef={
                  ref => {this.title = ref;}} type="text" placeholder="Enter Title"/>
              </FormGroup>
              <FormGroup controlId="title">
                <ControlLabel>Description</ControlLabel>
                <FormControl inputRef={
                  ref => {this.description = ref;}} type="text" placeholder="Enter Title"/>
              </FormGroup>
              <FormGroup controlId="title">
                <ControlLabel>Price</ControlLabel>
                <FormControl inputRef={
                  ref => {this.price = ref;}} type="text" placeholder="Enter Title"/>
              </FormGroup>
              <Button onClick={this.handelSubmit} bsStyle='primary'>
                Save Book
              </Button>
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Body>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select a book id to</ControlLabel>
                <FormControl inputRef={
                  ref => {this.delete = ref;}} componentClass="select" placeholder="select">
                  <option value={0}>select</option>
                  {books.map(
                      book => <option value={book.id}>{book.title}</option>)}
                </FormControl>
              </FormGroup>
              <Button onClick={this.handleDelete} bsStyle="danger">Delete
                book</Button>
            </Panel.Body>
          </Panel>
        </Well>);
  }

  handelSubmit = () => {
    const title = this.title.value;
    const description = this.description.value;
    const price = this.price.value;
    const bookToPost = [
      {title, description, price},
    ];
    this.props.postBook(bookToPost);
  };

  handleDelete = () => {
    const deleteTargetId = this.delete.value;
    if (deleteTargetId === '0') {
      return;
    }
    this.props.deleteBook(deleteTargetId);
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postBook: (books) => dispatch(postBooks(books)),
    deleteBook: (id) => dispatch(deleteBook(id)),
  };
};

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);