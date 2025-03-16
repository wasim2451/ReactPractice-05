import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ImageSlider } from './components/ImageSlider.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSlider />
    </>
  )
}

export default App
