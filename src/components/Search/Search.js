import React, { useEffect} from 'react'
import AxiosWithAuth from '../../utils/AxiosWithAuth'

const Search = (props) => {

  useEffect(() => {
    AxiosWithAuth()
      .get('https://wunderlist-be.herokuapp.com/api/v2/todos')
      .then(response => {
        console.log(response.data)
      })
      .catch(response => {
        console.log(response)
      })
  }, [])

  // useEffect(() => {
  //   AxiosWithAuth()
  //     .put('https://wunderlist-be.herokuapp.com/api/v2/todos/1/users/2')
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(response => {
  //       console.log(response)
  //     })
  // }, [])

  return (
    <div>
      
    </div>
  )
}

export default Search