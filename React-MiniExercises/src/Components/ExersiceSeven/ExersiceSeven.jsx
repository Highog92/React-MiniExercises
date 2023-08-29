// Build a form that accepts a first name and a last name. And instead of a boring "Submit" button, make a button that says "Greet Me" that when clicked, will alert "Hello [first name] [last name]!".

import { useState } from 'react'
import { Wrapper } from '../Wrapper/Wrapper'
import style from '../ExersiceSeven/ExsersiceSeven.module.scss'

export function ExerciseSeven() {
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")

function alertUser (){
    alert(`Hello ${firstName} ${lastName}`)
}
    return (
        <Wrapper>
            <h1>Exersice Seven</h1>
            <form className={style.formStyle}>
                <label htmlFor="firstName">Navn</label>
                <input onChange={(event) => setfirstName(event.target.value)} type="firstName" placeholder='Skriv dit navn' />
                <input onChange={(event) => setlastName (event.target.value)} type="lastName" placeholder='Skriv dit efternavn' />
                <button type='button' onClick={alertUser} >Greet Me</button>
            </form>
        </Wrapper>

    )

}