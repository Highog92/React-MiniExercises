import style from '../Wrapper/Wrapper.module.scss'

export function Wrapper({ title, children }) {

    return (
        <section className={style.wrapper}>
            <h1>
                {title}
            </h1>
            {children}


        </section>

    )

}
