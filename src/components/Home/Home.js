
import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom'

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const fetchdata = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>

      <Navigation onLogout={props.onLogout} />
      <div className="row">
        {
          users.map((user) => {
            const { title, id, url, thumbnailUrl } = user;
            return (
              <div className="col-sm-6" key={id}>
                <div className="card">
                  <div className="card-body">
                    <img src={url} className="card-img-top" style={{ "width": "18rem" }} alt='' />
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">{title}</p>
                    <Link to={thumbnailUrl} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home;