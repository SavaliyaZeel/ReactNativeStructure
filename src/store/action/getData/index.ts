import { GET_DATA_FALIURE, GET_DATA_SUCCESS, GET_DATA_WATCHER } from "../../constant"

export const getDataWatcher = () => {
    return { type: GET_DATA_WATCHER }
}
export const getDataSuccess = (payload: any) => {
    return { type: GET_DATA_SUCCESS, payload }
}
export const getDataFaliure = (payload: any) => {
    return { type: GET_DATA_FALIURE, payload }
}
