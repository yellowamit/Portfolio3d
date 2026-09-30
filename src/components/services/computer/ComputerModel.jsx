

// import React from 'react'
import { useGLTF } from '@react-three/drei'

const MODEL_PATH = '/computerModel.glb'
useGLTF.setDecoderPath('/draco/')

export function ComputerModel(props) {
  const { scene } = useGLTF(MODEL_PATH, true, true)
  return <primitive object={scene} {...props} />
}

useGLTF.preload(MODEL_PATH, true, true)
