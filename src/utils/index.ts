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

export const findMeshByName = (
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

export const timeConverter = (UNIX_timestamp: Date) => {
    const a = new Date(UNIX_timestamp)
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    const year = a.getFullYear()
    const month = months[a.getMonth()]
    const date = a.getDate()

    const dateSuffix =
        date === 11 || date === 12 || date === 13
            ? "th"
            : date % 10 === 1
            ? "st"
            : date % 10 === 2
            ? "nd"
            : date % 10 === 3
            ? "rd"
            : "th"

    // const hour = a.getHours()
    // const min = a.getMinutes()
    // const sec = a.getSeconds()
    const time = date + dateSuffix + " " + month + ", " + year + " "
    // + hour + ":" + min + ":" + sec
    return time
}
