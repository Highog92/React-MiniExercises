import './App.css'
import { HelloYellow } from './Components/ExersiceOne/ExersiceOne'
import { Wrapper } from './Components/Wrapper/Wrapper'
import { CaptureClicks } from './Components/ExersiceTwo/ExersiceTwo'
import { ExerciseThree } from './Components/ExersiceThree/ExersiceThree'
import { ExerciseFour } from './Components/ExerciseFour/ExerciseFour'
import { ExerciseFive } from './Components/ExersiceFive/ExersiceFive'
import { ExerciseSix } from './Components/ExserciseSix/ExersiceSix'
import { ExerciseSeven } from './Components/ExersiceSeven/ExersiceSeven'

function App() {

  return (
    <>
      <HelloYellow />
      <CaptureClicks />
      <ExerciseThree />
      <ExerciseFour />
      <ExerciseFive />
      <ExerciseSix/>
      <ExerciseSeven/>
    </>
  )
}

export default App
