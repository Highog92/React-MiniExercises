import { useState } from 'react'
// import style from '../ExersiceFive/Exersicefive.module.scss'
import { Wrapper } from '../Wrapper/Wrapper'


export function ExerciseFive() {
    const animalArray = ['Dog', 'Snake', 'Horse', 'Goat', 'Cow', 'Camel', 'Monkey']

    return (
        <Wrapper>
            <h1 >Exersice Five</h1>
            <ul style={{background:'yellowgreen'}}>
                {animalArray.map((animal, index) => {
                    return (

                        <li key={animal  + index}> {animal}</li>
                    )
                })}
            </ul>
        </Wrapper>

    )

}