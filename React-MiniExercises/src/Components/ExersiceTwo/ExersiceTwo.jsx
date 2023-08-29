// Using the native HTML <button> tag, capture the click event and alert the message, "Clicked!".

import style from '../ExersiceTwo/ExersiceTwo.module.scss'
import { Wrapper } from '../Wrapper/Wrapper'

export function CaptureClicks() {

    return (
        <section >
            <h1>Exersice Two</h1>
            <div className={style.captureClicks}>
                <button onClick={() => alert('You clicked me, well done')}>
                    Click Me!
                </button>
            </div>
        </section>

    )

}