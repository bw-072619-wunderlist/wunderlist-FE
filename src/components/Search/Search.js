import React, { useEffect} from 'react'
import AxiosWithAuth from '../../utils/AxiosWithAuth'

const Search = (props) => {

  // useEffect(() => {
  //   AxiosWithAuth()
  //     .get('https://wunderlist-be.herokuapp.com/api/v2/todos/2')
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(response => {
  //       console.log(response)
  //     })
  // }, [])

  // useEffect(() => {
  //   AxiosWithAuth()
  //     .put('https://wunderlist-be.herokuapp.com/api/v2/todos/2/users/1')
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(response => {
  //       console.log(response)
  //     })
  // }, [])
  console.log('search props :', props)

  return (
    <div>
      search page
    </div>
  )
}

export default Search