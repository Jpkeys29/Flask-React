import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [data, setData] = useState([])

  const fetchAPI = async () =>{
    const response = await axios.get("http://127.0.0.1:3000/students");
    console.log(response.data.students);
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return(
    <div>
      <h1></h1>
    </div>
  )
}

export default App
