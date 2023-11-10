import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Adminstyle.css';

const Example = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  return (
    <div>
      {data ? (
        <p>
          API Response for ID {id}: {JSON.stringify(data)}
        </p>
      ) : (
        <p>Loading data for ID {id}...</p>
      )}
    </div>
  );
};

function NotificationAd() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const dataIds = response.data.map(item => item.id);
        setIds(dataIds);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Sidebar />
      {ids.map((id, index) => (
        <Toast
          className="text-center align-self-center mr-3 d-inline-block m-1"
          bg="Dark"
          key={index}
        >
          <Toast.Header>
            <img src="" className="rounded me-2" alt="" />
            <strong className="me-auto">User Alex Message</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>
            <Example key={index} id={id} />
          </Toast.Body>
          <button id="cancel_button" type="button" className="btn btn btn-danger">
            Cancel
          </button>
        </Toast>
      ))}
    </>
  );
}

export default NotificationAd;
