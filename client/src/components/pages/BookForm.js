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

import {postBooks} from '../../actions/bookActions'

class BookForm extends React.Component {
  render() {
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
        </Well>);
  }

  handelSubmit = () => {
    const title = this.title.value;
    const description = this.description.value;
    const price = this.price.value;
    const bookToPost = [
      {title, description, price},
    ];

    this.props.postBook(bookToPost)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postBook: (books) => dispatch(postBooks(books)),
  };
};

export default connect(null, mapDispatchToProps)(BookForm);