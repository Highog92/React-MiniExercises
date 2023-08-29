// In this exercise, instead of manually and "imperatively" coding the render of each item in a list, use the map function to "declare" how React should render the list.
// Given an array:
// ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

// Use the map function to render them in an unordered list

import { useState } from 'react'
// import style from '../ExersiceFive/Exersicefive.module.scss'
import { Wrapper } from '../Wrapper/Wrapper'


export function ExerciseFive() {
    const animalArray = ['Dog', 'Snake', 'Horse', 'Goat', 'Cow', 'Camel', 'Monkey']

    return (
        <Wrapper>
            <h1>Exersice Five</h1>
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