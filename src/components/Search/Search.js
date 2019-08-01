import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import AxiosWithAuth from '../../utils/AxiosWithAuth'

const Search = ({ filteredTasks, query }) => {

  console.log('search props :', filteredTasks)

  if (filteredTasks.length > 0) {
    return (
      <div>
        <ul>
          {filteredTasks.map(task => (
            <li><Link to={`task/${task.id}`}>{task.title}</Link></li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div><h2>No Search Results For "{query}"</h2></div>;
  }
}

export default Search