import './App.css'
import chauChau from './assets/chau chau.png'
import chihuahua from './assets/chihuahua.png'
import golden from './assets/golden_retriver.png'
import haski from './assets/haski.png'
import kavaler from './assets/kavaler_king_charlz_spaniel.png'
import korgi from './assets/korgi.png'
import ovcharka from './assets/ovcharka.png'
import shpic from './assets/shpic.png'

function App() {

  return (
    <>
      <h2>Dogs</h2>
      <div className="container">
        <img className='element' src={chauChau} alt="" />
        <img className='element' src={chihuahua} alt="" />
        <img className='element' src={golden} alt="" />
        <img className='element' src={haski} alt="" />
        <img className='element' src={kavaler} alt="" />
        <img className='element' src={korgi} alt="" />
        <img className='element' src={ovcharka} alt="" />
        <img className='element' src={shpic} alt="" />
      </div>
    </>
  )
}

export default App
