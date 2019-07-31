import React from 'react';
import { Modal, Form, Input, Button, TextArea } from 'semantic-ui-react'

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import 'semantic-ui-css/semantic.min.css';

class CreateTask extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      title: '',
      description: '',
      // completed: false,
      // repeat: '',
      // scheduled_at: null,
  }}

  changeHandler = (event) => {
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.value 
  })}

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    // setLoading(true)
    // console.log(loading)
    // console.log(login)
    AxiosWithAuth()
      .post('https://wunderlist-be.herokuapp.com/api/v2/todos', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response.error)
      })
  }

  render() {
    return (
      <div>
      <Modal.Header>New Task</Modal.Header>
        <Modal.Content>
        {/* In case I want to do a description instead of a header
        
        <Modal.Description>
          <Header>Default Profile Image</Header>
        </Modal.Description> */}
        <div className='task-form'>
          <Form>
            <Form.Field
              label='Title'
              name='title'
              control={Input}
              value={this.state.title}
              onChange={this.changeHandler} />

            <Form.Field 
              label='Description'
              control={TextArea}
              name='description' 
              value={this.state.description} 
              onChange={this.changeHandler} />

            {/* <DatePicker
              selected={this.state.scheduled_at}
              onChange={this.handleDate} /> */}

              {/* SET SCHEDULE, will need cat here */}
            </Form>
          <Button 
            positive 
            icon='checkmark' 
            labelPosition='right' 
            content='Add New Task' 
            onClick={this.handleSubmit} />
        </div>
      </Modal.Content>
      </div> 
    )
  }
}

export default CreateTask



/// Nightmare category code to implement when I do lists

{/* <Dropdown 
name={this.state.category}
placeholder='category' 
value={categoryOptions.text}
selection 
options={categoryOptions} 
onChange={(event) => this.changeCategory(event.target.textContent)}/>


const categoryDefinitions = [
  'Organization', 'Promotion', 'Production', 'Market Development', 'Set-up', 'Other'
]

const categoryOptions = _.map(categoryDefinitions, (category, index) => ({
  key: categoryDefinitions[index],
  text: category,
  value: categoryDefinitions[index]
}))


import _ from 'lodash'; */}



            {/* <h4>Sub-Tasks</h4>
            <Form.Field
              label='Purchase Description'
              name='purchaseDescription'
              control={Input}
              value={this.state.purchaseDescription}
              onChange={this.changeHandler} />
            <Form.Field>
            <label>Price</label>
            <Input type="text" placeholder="Amount">
            <Label basic>$</Label>
            <input
            name="price"
            onChange={this.changeHandler}
            value={this.state.price}
            />
            <Label>.00</Label>
            </Input>
            </Form.Field>

            <Form.Field 
              label='Quantity'
              name='qty'
              control={Input}
              value={this.state.qty}
            onChange={this.changeHandler} /> */}

            //// Info on adding sub-tasks that I'm saving for now