import { Suspense,useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload,useGLTF} from "@react-three/drei";

import Loader from "../Loader";

const Robo1 = () => {
    const Robo  = useGLTF("./desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black"/>
            <pointLight intensity={1}/>
            <primitive
                object={Robo.scene} 
            />
        </mesh>
    );
};
const Robo= () => {
    return (
        <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25}}
        gl={{ preserveDrawingBuffer: true }}
        >
        </Canvas>
    )
};

export default Robo;