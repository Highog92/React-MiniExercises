import { Wrapper } from "../Wrapper/Wrapper";
import { jsonJokes } from "./Jokes";
import style from './ExerciseEight.module.scss'

export function ExerciseEight() {

    return (
        <Wrapper title='Exersice Eight'>
            <div className={style.jokeContainer}>
                {jsonJokes.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <h5>{item.setup}</h5>
                            <p>{item.punchline}</p>
                        </div>


                    )
                })}
            </div>

        </Wrapper>

    )

}
