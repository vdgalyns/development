const API_URL = import.meta.env.VITE_API_URL

export function request<T = unknown>(endpoint: string, options?: RequestInit) {
    const url = API_URL + endpoint

    return fetch(url, options).then((response) => {
        if (response.ok) {
            return response.json() as Promise<T>
        }
        return Promise.reject(`Ошибка ${response.status}`)
    })
}