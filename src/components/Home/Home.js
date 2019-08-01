import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../utils/AxiosWithAuth';



const Home = () => {
  
const [EverythingState, setEverythingState] = useState([]);

// const sortedState = EverythingState.updated_at.sort();

useEffect(() => {
  AxiosWithAuth()
      .get(`https://wunderlist-be.herokuapp.com/api/v2/todos`)
      .then(response => {

        setEverythingState(response.data)

        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
}, []); 

// if (this.props.mountComplete === false) {
//   return (
//       <Dimmer active inverted>
//           <Loader>Loading</Loader>
//       </Dimmer>
//   )
// } else {
//   const todayTasks = todos.duedate.filter(task =>
//       task.category.includes('Organization'));

  return(
    <div>
      Home page
    </div>
  )
}

export default Home;