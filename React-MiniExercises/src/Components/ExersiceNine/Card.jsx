import style from './ExersiceNine.module.scss'
export function Card(props) {


    return (
        <section>
            <div>
                <div>
                    <div>
                        <img src={props.src} />
                        <p>Name: {props.name}</p>
                        <p>Skill: {props.skill}</p>
                        <p>Title: {props.title}</p>
                    </div>
                    <div className={style.cardBack}>
                        <p>City: {props.city}</p>
                        <p>Street Name: {props.streetName}</p>
                        <p>State: {props.state}</p>
                        <p>Country: {props.country}</p>
                    </div>
                </div>
            </div>
        </section>

    )

}
