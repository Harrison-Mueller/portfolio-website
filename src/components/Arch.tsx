import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from 'three'
import * as THREE from 'three';


function Arch({scale = [1, 1, 1], position = [0, 0, 0], rotation=[Math.PI / 2, 0, 0]}) {
    const ref = useRef(null);
    const gltf = useLoader(GLTFLoader, "/models/ArchV2.glb");

    const normalTexture = useLoader(TextureLoader, '/normals/rock_tile_floor.png');
    const textureTiles = 25;
    // const normalTexture = useLoader(TextureLoader, '/normals/stone_wall.png');
    // const textureTiles = 15;
    // const normalTexture = useLoader(TextureLoader, '/normals/BrickNormal.png');
    // const textureTiles = 10;

    
    const wallTexture = useLoader(TextureLoader, '/textures/Wall.png');
    const wallTiles = 5;

    const archMesh = gltf.nodes.Plane as THREE.Mesh;
    const archMaterial = archMesh.material as THREE.MeshStandardMaterial;
    archMaterial.color.set('#43403b'); 
    archMaterial.metalness = 0.0;
    archMaterial.roughness  = 0.6;
  
  
    normalTexture.wrapS = THREE.RepeatWrapping;
    normalTexture.wrapT = THREE.RepeatWrapping;
    normalTexture.repeat.set(textureTiles, textureTiles);
    archMaterial.normalMap = normalTexture;
  
    wallTexture.wrapS = THREE.RepeatWrapping;
    wallTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.repeat.set(wallTiles, wallTiles);
    archMaterial.map = wallTexture;


    return(
        <>
            <primitive
                ref={ref}
                object={archMesh.clone()}
                rotation ={rotation}
                position={position}
                scale={scale}
            />
        </>
    )
}

export default Arch;