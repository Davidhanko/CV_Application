import {useState} from 'react'
import './App.css'

export function App(initialPerson, newPerson) {

    function onSubmit() {
        console.log(initialPerson)
    }

    return (
        <>
          <form>
            <label>
              Name:
              <input type="text" name="name" onChange={newPerson}/>
            </label>
            <br/>
            <label>
              Surname:
              <input type="text" name="Surname" onChange={newPerson}/>
            </label>
            <br/>
            <label>
              E-mail:
              <input type="text" name="e-mail" onChange={newPerson}/>
            </label>
            <br/>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" onChange={newPerson}/>
            </label>
              <br/>
            <label>
              Address:
              <input type="text" name="address" onChange={newPerson}/>
            </label>
              <br/>
            <input type="button" value="submit" onClick={onSubmit}/>
          </form>
        </>
    )
}

export default App
