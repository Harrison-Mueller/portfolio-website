import { Canvas, useLoader, useFrame } from "@react-three/fiber";
// import { useTexture, useScroll, ScrollControls } from '@react-three/drei';
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useMemo, useState  } from "react";
import * as THREE from 'three';
import Arch from "./Arch"
import Smoke from "./Smoke"

import "../css/Scene.css";

const archCount = 10;
const archSpace = 40;

function Scene() {
    const [time, setTime] = useState(0);
    const [scroll, setScroll] = useState(1);
    const timeRef = useRef(0);

    useFrame((state) => {
        timeRef.current = state.clock.elapsedTime * 2;
        setTime(timeRef.current);
        setScroll(window.scrollY / 200);
    });


    return(
        <>
            <directionalLight position={[-1, 1, 1]} intensity={0.5}/>
            <pointLight position={[0, 0, -100]} intensity={1000} distance={5000}/>
            <pointLight position={[0, 0, 0]} intensity={1000} distance={5000}/>
            {Array.from({ length: archCount }).map((_, index) => (
                <Arch 
                    position={[0, 0, 1 - archSpace * archCount + (index * archSpace + scroll + time)%(archSpace * archCount)]}
                    rotation={[Math.PI / 2, 0, 0]} 
                    scale={[3, 2, 3]}
                />
            ))}

            {Array.from({ length: archCount }).map((_, index) => (
                <Smoke 
                    position={[Math.sin(1000 * index) * 1, 0, 15 - archSpace * archCount + (index * archSpace + scroll + time)%(archSpace * archCount)]} 
                    rotation={[0, 0, index]}
                    opacity={0.5 * Math.min(6, 6 - (21 - archSpace * archCount + (index * archSpace + time)%(archSpace * archCount))) / 6}
                />
            ))}

        </>

    )
}

export default Scene;