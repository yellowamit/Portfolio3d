import { useGLTF } from '@react-three/drei'

const MODEL_PATH = '/consoleModel.glb'
useGLTF.setDecoderPath('/draco/')

export function ConsoleModel(props) {
  const { scene } = useGLTF(MODEL_PATH, true, true)
  return <primitive object={scene} {...props} />
}

useGLTF.preload(MODEL_PATH, true, true)
