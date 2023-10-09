import styles from './App.module.css'
import Header from '../Header/Header.tsx'
import Project from '../Project/Project.tsx'
import { useEffect, useState } from "react"
import api from '../../api'
import type { Project as ProjectT } from '../../types/project.ts'

export default function App() {
    const [projects, setProjects] = useState<ProjectT[]>([])

    useEffect(() => {
        api.fetchProjects()
            .then((data) => {
                setProjects(data)
            })
    }, [])

    return (
        <div className={styles.app}>
            <Header />

            <main className={styles.main}>
                {projects.length > 0 && projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </main>
        </div>
    )
}

