import { useState } from 'react'
import './App.css'
import GeneralCard from "./GeneralCard.jsx";
import GeneralCV from "./GeneralCV.jsx";

function App() {
    const [person, setPerson] = useState({name: '', surname: '', email: '', phoneNumber: '', address: ''})

    function onChange(e) {
        setPerson({...person, [e.target.name]: e.target.value})
    }
  return (
    <>
        <GeneralCard initialPerson={person} newPerson={onChange}></GeneralCard>
        <GeneralCV></GeneralCV>
    </>
  )
}

export default App
