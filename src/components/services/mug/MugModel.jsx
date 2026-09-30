import { useGLTF } from '@react-three/drei'

const MODEL_PATH = '/mugModel.glb'
useGLTF.setDecoderPath('/draco/')

export function MugModel(props) {
  const { scene } = useGLTF(MODEL_PATH, true, true)
  return <primitive object={scene} {...props} />
}

useGLTF.preload(MODEL_PATH, true, true)
