import { useState } from 'react'
import style from '../ExersiceOne/ExersiceOne.module.scss'
import { Wrapper } from '../Wrapper/Wrapper'


export function ExerciseFour() {
    const [count, setCount] = useState(0)

    return (
        <Wrapper>
            <h1>Exersice Four</h1>
            <div className={style.helloYellow}>
                <button onClick={() => setCount(count + 1)}>Click Me</button>
                <p> You clicked {count} times</p>

            </div>
        </Wrapper>

    )

}