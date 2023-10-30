import { request } from '../utils/request.ts'
import type { Project } from '../types/project.ts'

export default {
    fetchProjects() {
        return request<{ projects: Project[] }>('/projects')
    }
}