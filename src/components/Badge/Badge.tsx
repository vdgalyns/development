import styles from './Badge.module.css'

interface Props {
    text: string
}
export default function Badge({ text }: Props) {
    return (
        <div className={styles.badge}>
            {text}
        </div>
    )
}