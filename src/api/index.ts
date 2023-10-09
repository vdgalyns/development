import type { Project } from '../types/project.ts'

export default {
    fetchProjects() {
        return fetch('https://static.dev.galynsky.ru/projects.json')
            .then((response) => {
                if (response.ok) {
                    return response.json() as Promise<Project[]>
                }
                return Promise.reject(`Ошибка ${response.status}`)
            }).catch((error) => error)
    }
}