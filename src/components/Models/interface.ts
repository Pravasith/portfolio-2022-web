import { Object3D } from "three"

export interface TableLightsProps {
    parentObjectForSpotlight: Object3D
    spotlightTarget: Object3D
}

export interface FlamingoLightsProps {
    spotlightTarget: Object3D
}
