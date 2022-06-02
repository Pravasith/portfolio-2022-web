import { Object3D } from "three"

export interface LightsProps {
    parentObjectForSpotlight: Object3D
    spotlightTarget: Object3D
}
