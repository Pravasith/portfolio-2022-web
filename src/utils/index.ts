import { ObjectMap } from "@react-three/fiber"

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

import * as THREE from "three"

export const random20Id = () => {
    let result = ""
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 20; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]

    return result
}

export const randoInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const findMesh = (
    threeObject: GLTF & ObjectMap,
    meshName: string,
    noShadowInAllMeshes?: boolean
) => {
    let mesh = new THREE.Object3D()

    threeObject.scene.traverse(o => {
        !noShadowInAllMeshes &&
            ((o.castShadow = true), (o.receiveShadow = true))

        o.name === meshName && (mesh = o)
    })

    return mesh
}
