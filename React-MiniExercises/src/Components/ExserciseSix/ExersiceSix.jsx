// Instead of using the <ul> and <li> HTML tags, create a custom component that accepts a list as its prop, and renders it accordingly.

// import style from '../ExersiceSix/ExersiceSix.module.scss'


import { Wrapper } from '../Wrapper/Wrapper'
import { CreateList } from './CreateList'
import TwemojiDogFace from '../../assets/TwemojiDogFace'
import NotoV1Snake from '../../assets/NotoV1Snake'
import TwemojiHorseFace from '../../assets/TwemojiHorseFace'
import FluentEmojiGoat from '../../assets/FluentEmojiGoat'
import TwemojiCowFace from '../../assets/TwemojiCowFace'
import FluentEmojiTwoHumpCamel from '../../assets/FluentEmojiTwoHumpCamel'
import NotoMonkey from '../../assets/NotoMonkey'



export function ExerciseSix() {
    const animalArray = ['Dog', 'Snake', 'Horse', 'Goat', 'Cow', 'Camel', 'Monkey']
    const animalList = [
        { name: 'Dog', icon: <TwemojiDogFace /> },
        { name: 'Snake', icon: <NotoV1Snake /> },
        { name: 'Horse', icon: <TwemojiHorseFace /> },
        { name: 'Goat', icon: <FluentEmojiGoat /> },
        { name: 'Cow', icon: <TwemojiCowFace /> },
        { name: 'Camel', icon: <FluentEmojiTwoHumpCamel /> },
        { name: 'Monkey', icon: <NotoMonkey /> }
    ]
    return (
        <Wrapper>
            <h1>Exersice Six</h1>

            <div style={{ background: 'yellowgreen' }}>
                <CreateList list={animalList} />

            </div>

        </Wrapper>

    )

}