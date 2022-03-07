import { Action } from "@utils/reducers/interface"

export type ContextProps<T = object> = {
    state: T | null
    dispatch: React.Dispatch<Action> | null
}
