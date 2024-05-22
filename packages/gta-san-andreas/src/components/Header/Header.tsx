import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles['header-title']}>
                Trapaças do GTA San Andreas para PS2
            </h1>
        </div>
    )
}
