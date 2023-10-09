import styles from './Link.module.css'

interface Props {
    url: string
    children: string
}

export default function Link({ url, children }: Props) {
    return (
        <a className={styles.link} href={url} target="_blank">
            {children}
        </a>
    )
}