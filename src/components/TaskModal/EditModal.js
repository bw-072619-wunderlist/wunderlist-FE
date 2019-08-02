import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Modal, Form, Input, Button, TextArea, Radio } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import 'semantic-ui-css/semantic.min.css';
import "react-datepicker/dist/react-datepicker.css";
import "./TaskModal.scss";

const EditModal = (props) => {
  console.log(props)
  const [oldTask, setOldTask] = useState({
    title: props.task.title,
    description: props.task.description,
    completed: props.task.completed,
    repeat: props.task.repeat,
    deleted: props.task.deleted,
    // scheduled_at: props.task.scheduled_at
  })

  const parsedInt = parseInt(props.id)
  console.log(parsedInt)

  const submitTask = {
    ...oldTask,
    scheduled_at: props.task.scheduled_at
  }
  const [radioStatus, setRadio] = useState(oldTask.repeat)

  const changeHandler = (event) => {
    setOldTask({
      ...oldTask,
      [event.target.name]: event.target.value
    })
  }

  const dateHandler = date => {
    setOldTask({ ...oldTask, scheduled_at: date })
    console.log(oldTask)
  }

  const repeatHandler = (e, value) => {
    setRadio(value.value)
    console.log(value)
  }

  useEffect(() => {
    setOldTask({
      ...oldTask,
      repeat: radioStatus
    })
  }, [radioStatus])

  const addNewTask = event => {
    event.preventDefault();
    console.log(oldTask)
    // setLoading(true)
    // console.log(loading)
    // console.log(login)
    AxiosWithAuth()
      .put(`https://wunderlist-be.herokuapp.com/api/v2/todos/${props.id}`, submitTask)
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response.error)
      })
  }

  if (oldTask.title)

  return (
    <div>
      <Modal.Header className="taskHeader">New Task</Modal.Header>
      <Modal.Content>
        <div className='task-form'>
          <Form>
            <Form.Field
              label='Title'
              name='title'
              control={Input}
              value={oldTask.title}
              onChange={changeHandler} />

            <Form.Field
              label='Description'
              control={TextArea}
              name='description'
              value={oldTask.description}
              onChange={changeHandler} />

            <div className='date-div'>
              <DatePicker
                selected={oldTask.scheduled_at}
                onChange={dateHandler}
                name='scheduled_at'
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time" />

              <Form.Field>
                Selected value:<b>{radioStatus}</b>
              </Form.Field>
              <div className="radio-div">
                <Form.Field>
                  <Radio
                    label='No repeat'
                    name='radioGroup'
                    value='no_repeat'
                    checked={radioStatus === 'no_repeat'}
                    onChange={repeatHandler}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='Daily'
                    name='radioGroup'
                    value='daily'
                    checked={radioStatus === 'daily'}
                    onChange={repeatHandler}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='Weekly'
                    name='radioGroup'
                    value='weekly'
                    checked={radioStatus === 'weekly'}
                    onChange={repeatHandler}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='Monthly'
                    name='radioGroup'
                    value='monthly'
                    checked={radioStatus === 'monthly'}
                    onChange={repeatHandler}
                  />
                </Form.Field>
              </div>
            </div>

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


export default EditModal;


// handleChange = (e, { value }) => this.setState({ value })





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


            {/* <Dropdown
            placeholder='Repeat Task?'
            selection={oldTask.repeat}
            onChange={repeatHandler}
            options={repeatOptions} />
            <Dropdown 
              name={oldTask.repeat}
              placeholder='Repeat Task?' 
              value={repeatOptions.text}
              selection 
              options={repeatOptions} 
              onChange={(event) => repeatHandler(event.target.textContent)}/>
 */}