import type { Project } from '../../types/project.ts'
import styles from './Project.module.css'
import Badge from '../Badge/Badge.tsx'
import Link from '../Link/Link.tsx'
import { useMemo } from 'react'
import { createFormattedDate } from "../../utils/formattedDate.ts";

interface Props {
    project: Project
}

export default function Project({ project }: Props) {
    const publishedAt = useMemo(() => {
        return createFormattedDate(project.publishedAt)
    }, [project])

    return (
        <div className={styles.project}>
            <h4 className={styles.name}>
                {project.name}
            </h4>
            <p className={styles.description}>
                {project.description}
            </p>
            <div className={styles.stack}>
                Стек:
                <div className={styles.stackList}>
                    {project.stack.map((stack, index) => <Badge key={index} text={stack} />)}
                </div>
            </div>
            <p className={styles.publishedAt}>
                Опубликовано: {publishedAt}
            </p>
            <div className={styles.links}>
                <Link url={project.github}>
                    GitHub
                </Link>
                {project.site && (
                    <Link url={project.site}>
                        Site
                    </Link>
                )}
            </div>
        </div>
    )
}