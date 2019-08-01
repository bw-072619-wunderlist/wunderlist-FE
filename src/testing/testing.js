import React, { useEffect } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const Testing = () => {

    useEffect(() => {
        AxiosWithAuth()
            .get('https://wunderlist-be.herokuapp.com/api/v2/users')
            .then(response => {
                console.log(response.data)
            })
            .catch(response => {
                console.log(response)
            })
    })

    return (
        <div>testing</div>

    )
}

export default Testing;