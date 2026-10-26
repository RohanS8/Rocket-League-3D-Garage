import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Car from './components/Car'
import { useEffect } from 'react'
import './App.css'

type Design = {
  color: string
  wheelColor: string
  cabinColor: string
  wheelRadius: number
}

function App () {
  const [design, setDesign] = useState<Design>(() => {
    try {
      const saved = localStorage.getItem('car-design')

      return saved
        ? JSON.parse(saved)
        : {
            color: '#ff6600',
            cabinColor: '#9ff400',
            wheelColor: '#222222',
            wheelRadius: 0.45
          }
    } catch {
      return {
        color: '#ff6600',
        cabinColor: '#9ff400',
        wheelColor: '#222222',
        wheelRadius: 0.45
      }
    }
  })

  useEffect(() => {
    localStorage.setItem('car-design', JSON.stringify(design))
  }, [design])

  return (
    <main className='designer'>
      <aside className='controls'>
        <h1>Car Designer</h1>

        <label htmlFor='body-color'>Body colour</label>
        <input
          id='body-color'
          type='color'
          value={design.color}
          onChange={event =>
            setDesign({ ...design, color: event.target.value })
          }
        />

        <label htmlFor='cabin-color'>Cabin colour</label>
        <input
          id='cabin-color'
          type='color'
          value={design.cabinColor}
          onChange={event =>
            setDesign({ ...design, cabinColor: event.target.value })
          }
        />

        <label htmlFor='wheel-color'>Wheel colour</label>
        <input
          id='wheel-color'
          type='color'
          value={design.wheelColor}
          onChange={event =>
            setDesign({ ...design, wheelColor: event.target.value })
          }
        />

        <label htmlFor='wheel-size'>
          Wheel radius: {design.wheelRadius.toFixed(2)}
        </label>

        <input
          id='wheel-size'
          type='range'
          min='0.25'
          max='0.65'
          step='0.01'
          value={design.wheelRadius}
          onChange={event =>
            setDesign({
              ...design,
              wheelRadius: Number(event.target.value)
            })
          }
        />
      </aside>

      <section className='viewer' aria-label='3D preview'>
        <Canvas camera={{ position: [4, 3, 5], fov: 45 }}>
          <color attach='background' args={['#151820']} />

          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Car
            color={design.color}
            cabinColor={design.cabinColor}
            wheelColor={design.wheelColor}
            wheelRadius={design.wheelRadius}
          />

          <gridHelper args={[10, 10]} position={[0, -0.65, 0]} />

          <OrbitControls makeDefault />
        </Canvas>
      </section>
    </main>
  )
}

export default App
