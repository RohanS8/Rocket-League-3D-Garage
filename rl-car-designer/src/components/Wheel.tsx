type WheelProps = {
  position: [number, number, number]
  color: string
  radius: number
}

function Wheel({ position, color, radius }: WheelProps) {
  return (
    <mesh position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[radius, radius, 0.3, 24]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Wheel