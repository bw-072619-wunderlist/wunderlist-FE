import React from 'react';

class CreateTask extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      title: '',
      description: '',
      completed: false,
      repeat: ''
    }
  }
  render() {
    return (
      <div>
      {/* <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
        <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>*/}
      </div> 
    )
  }
}

export default CreateTask