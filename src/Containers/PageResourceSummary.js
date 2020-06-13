import React, { Component } from 'react';
import appStyles from '../App.module.css';
import { Container, Col, Row, Table, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class PageResourceSummary extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className={appStyles.body}>
        <h1>Shop</h1>
        <Container>
          <Row><Col>&lt;&lt;</Col><Col>May</Col><Col>&gt;&gt;</Col></Row>
        </Container>

        <Table striped>
          <thead>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Available</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
            </tr>
            <tr>
              <td>Available</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
            </tr>
            <tr>
              <td>Available</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
            </tr>
            <tr>
              <td>Available</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
            </tr>
            <tr>
              <td>Available</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
            </tr>
            <tr>
              <td>Available</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
            </tr>
          </tbody>
        </Table>

        <Form>
          <FormGroup tag="fieldset">
            <legend>Radio Buttons</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Option one is this and that—be sure to include why it's great
          </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Option two can be something else and selecting it will deselect option one
          </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio1" disabled />{' '}
                Option three is disabled
          </Label>
            </FormGroup>
          </FormGroup>
        </Form>

        <Button>
          Confirm
        </Button>
      </div>
    )
  }
}


export default PageResourceSummary;