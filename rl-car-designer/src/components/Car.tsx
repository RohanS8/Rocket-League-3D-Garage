import Wheel from './Wheel'

type CarProps = {
  color: string
  wheelColor: string
  wheelRadius: number
  cabinColor: string
}

function Car ({ color, wheelColor, wheelRadius, cabinColor }: CarProps) {
  const carHeight = wheelRadius - 0.45
  return (
    <group position={[0, carHeight, 0]}>
      {/* Body */}
      <mesh>
        <boxGeometry args={[2, 0.5, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Cabin */}
      <mesh position={[0, 0.65, -0.3]}>
        <boxGeometry args={[1.6, 0.8, 1.8]} />
        <meshStandardMaterial color={cabinColor} />
      </mesh>

      <Wheel
        position={[-1.05, -0.2, 1.2]}
        color={wheelColor}
        radius={wheelRadius}
      />
      <Wheel
        position={[1.05, -0.2, 1.2]}
        color={wheelColor}
        radius={wheelRadius}
      />
      <Wheel
        position={[-1.05, -0.2, -1.2]}
        color={wheelColor}
        radius={wheelRadius}
      />
      <Wheel
        position={[1.05, -0.2, -1.2]}
        color={wheelColor}
        radius={wheelRadius}
      />
    </group>
  )
}

export default Car
