import React, { useEffect } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const Testing = () => {

  const oldPerson = JSON.parse(localStorage.getItem('data'))
  console.log(oldPerson)

  console.log(new Date("2019-08-18T20:30:00.000Z"))

    useEffect(() => {
        AxiosWithAuth()
            .get('https://wunderlist-be.herokuapp.com/api/v2/todos')
            .then(response => {
                console.log('test', response.data)
            })
            .catch(response => {
                console.log('test', response)
            })
    },[])

    return (
        <div>testing</div>

    )
}

export default Testing;