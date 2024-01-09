import { useEffect, useState } from "react"
import { Wrapper } from "../Wrapper/Wrapper"
import { Card } from "./Card"
import style from './ExersiceNine.module.scss'

export function ExerciseNine() {
    const [userData, setUserData] = useState([])
    useEffect(() => {

        const fetchUsers = () => {

            const url = 'https://random-data-api.com/api/users/random_user?size=10'
            fetch(url).then(result => result.json()).then(data => setUserData(data))
        }
        fetchUsers()
    }, [])

    console.log("data", userData);

    return (
        <section>
            <h1>Exersice Nine</h1>
            <div className={style.cards}>
                {
                    userData && userData.map((item) => {
                        return (

                            <Card
                                key={item.uid}
                                src={item.avatar}
                                name={item.first_name + " " + item.last_name}
                                skill={item.employment.key_skill}
                                title={item.employment.title}
                                city={item.address.city}
                                streetName={item.address.street_name}
                                state={item.address.state}
                                country={item.address.country}
                            />
                        )

                    })
                }
            </div>
        </section>

    )

}