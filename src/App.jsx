import './App.css'
import { useEffect } from 'react';
import CVCreator from './components/CVCreator'

function App() {

  useEffect(() => {
    document.title = "CV - World's Greatest Boss";
  }, []);

  return (
    <div>
      <CVCreator/>
    </div>
  )
}

export default App
