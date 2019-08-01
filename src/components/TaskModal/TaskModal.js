import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Modal, Form, Input, Button, TextArea, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import 'semantic-ui-css/semantic.min.css';
import "react-datepicker/dist/react-datepicker.css";

const TaskModal = (props) => {
  const [taskState, setTask] = useState({
    title: '',
    description: '',
    repeat: 'no-repeat',
    scheduled_at: null,
  })
  
  useEffect(() => {
    if (props.task) {
      setTask({
        title: props.task.title,
        description: props.task.description,
        repeat: props.task.repeat,
        scheduled_at: props.task.scheduled_at
      })
    }
  },[])

  console.log(props.task)

  const changeHandler = (event) => {
    setTask({ 
      ...taskState,
      [event.target.name]: event.target.value 
  })}

  const dateHandler = date => {
    setTask({ ...taskState, scheduled_at: date})
    console.log(taskState)
  }

  const repeatHandler = repeatValue => {
    console.log(repeatValue)
    setTask({ ...taskState, repeat: repeatValue})
  }

  const addNewTask = event => {
    event.preventDefault();
    console.log(taskState)
    // setLoading(true)
    // console.log(loading)
    // console.log(login)
    AxiosWithAuth()
      .post('https://wunderlist-be.herokuapp.com/api/v2/todos', taskState)
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response.error)
      })
  }

  const editTask = event => {
    event.preventDefault()

  }

  const repeatValues = [
    {text: `Don't Repeat`,
    value: 'no-repeat'},
    {text: 'Daily',
    value: 'daily',},
    {text: 'Weekly',
    value: 'weekly'},
    {text: 'Monthly',
    value: 'monthly'}
  ]

  const repeatOptions = _.map(repeatValues.text, (value, index) => ({
    key: repeatValues.value[index],
    text: value,
    value: repeatValues.value[index]
  }))

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
            value={taskState.title}
            onChange={changeHandler} />

          <Form.Field 
            label='Description'
            control={TextArea}
            name='description' 
            value={taskState.description} 
            onChange={changeHandler} />

          <DatePicker
            selected={taskState.scheduled_at}
            onChange={dateHandler}
            name='scheduled_at'
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time" />

          {/* <Dropdown
            placeholder='Repeat Task?'
            selection={taskState.repeat}
            onChange={repeatHandler}
            options={repeatOptions} /> */}
            <Dropdown 
              name={taskState.repeat}
              placeholder='Repeat Task?' 
              value={repeatOptions.text}
              selection 
              options={repeatOptions} 
              onChange={(event) => repeatHandler(event.target.textContent)}/>

          </Form>
        <Button 
          positive 
          icon='checkmark' 
          labelPosition='right' 
          content='Add New Task' 
          onClick={addNewTask} />
      </div>
    </Modal.Content>
    </div> 
  )
}


export default TaskModal



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


 */}