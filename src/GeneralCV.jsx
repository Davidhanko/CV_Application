import {useState} from 'react'
import './App.css'

function App(sendPerson) {
    const [person, setPerson] = useState({sendPerson});

  function onSubmit() {
    console.log(person)
  }

    return (
        <>
          <button onClick={onSubmit}>Send</button>
        </>
    )
}

export default App
