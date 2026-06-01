import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from 'three'
import * as THREE from 'three';

type SmokeProps = {
    size?: [number, number];
    position?: [number, number, number] | THREE.Vector3;
    rotation?: [number, number, number] | THREE.Euler;
    opacity?: number;
};

function Smoke({size = [80, 80], position = [0, 0, 0], rotation=[0, 0, 0], opacity = 1}: SmokeProps) {
    const texture = useLoader(TextureLoader, '/textures/SmokeV2.png');


    return(
        <mesh position={position} rotation={rotation}>

            <planeGeometry args={size} />
            <meshBasicMaterial
              map={texture}
              transparent={true}
              side={THREE.DoubleSide}
              opacity={opacity}
            />
        </mesh>
    )
}

export default Smoke;