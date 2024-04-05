import { useState } from 'react'
import './App.css'

function App() {
  const [backend, setBackend]=useState(null)
  const call_backend=async()=>{
    try {
      
      const response = await fetch('/api/v1/greet');
      
      if (!response.ok) {
          throw new Error('Failed to fetch data from the backend');
      }
      const data = await response.json();
      console.log('Data from the backend:', data);
      setBackend(data.body);
  } catch (error) {
      console.error('Error fetching data from the backend:', error.message);
      throw error;
  }
  }
  return (
    <>
      <button onClick={call_backend}>Call backend</button>
      {setBackend && <p>{backend}</p>}
    </>
  )
}

export default App
