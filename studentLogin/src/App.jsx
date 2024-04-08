import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:3000/students");
    // console.log(response.data.students)
    setArray(response.data.students);
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  // const datos = data.map((item) => (item))

  return (
    <div>
        {array.map((student, index) => (
          <p key={index}>
          <span >{student}</span>
          <br />
          </p>
        ))}
    </div>
  )
}

export default App
