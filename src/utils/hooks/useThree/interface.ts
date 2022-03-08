export interface ThreeBasicExports {
    scene: THREE.Scene | null
    camera: THREE.PerspectiveCamera | null
    renderer: THREE.WebGLRenderer | null
}

export interface RenderOptions {
    stop: () => void
    start: () => void
}
