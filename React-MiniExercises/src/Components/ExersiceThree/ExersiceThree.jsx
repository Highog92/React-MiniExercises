// In this exercise, build your own Button component and render it three times. On user click, it should alert which button was clicked:

// import style from '../Wrapper/Wrapper.module.scss'

import style from '../ExersiceThree/ExersiceThree.module.scss'
import { AlertButton } from './AlertButton'

export function ExerciseThree() {

    return (
        
        <section >
            <h1>Exersice Three</h1>
        <div className={style.exersiceThree}>
            <AlertButton title={'Alert 1'} />
            <AlertButton title={'Alert 2'} />
            <AlertButton title={'Alert 3'} />
        </div>

        </section>

    )

}
