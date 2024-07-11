import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/')
          .then(response => {
              console.log('Data received:', response.data);
              setData(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
