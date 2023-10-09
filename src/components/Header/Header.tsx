import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>
                Мои проекты
            </h2>
        </header>
    )
}