import './App.css'

import One from  './assets/react.svg'
import Two from  './assets/react.svg'
import Three from  './assets/react.svg'
import Four from  './assets/react.svg'
import Five from  './assets/react.svg'

import Carousel from './carousel'

function App() {
  return (
    <div className="app">
      <Carousel>
        <img id="slideImg0" src={One} />
        <img id="slideImg1" src={Two} />
        <img id="slideImg2" src={Three} />
        <img id="slideImg3" src={Four} />
        <img id="slideImg4" src={Five} />
      </Carousel>
    </div>
  )
}

export default App