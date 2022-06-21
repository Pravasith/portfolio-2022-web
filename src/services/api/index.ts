import Axios, { AxiosRequestConfig } from "axios"

const requestData: AxiosRequestConfig = {
    headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "application/json",
    },
    // withCredentials: true // for cookie Auth
}

const GET = <T>(url: string) => {
    return new Promise<T>((resolve, reject) => {
        let data

        Axios.get<T>(url, requestData)
            .then(res => {
                data = res.data
                resolve(data)
            })
            .catch(e => {
                console.error(e)
                reject(e)
            })
    })
}

export default {
    GET,
}
