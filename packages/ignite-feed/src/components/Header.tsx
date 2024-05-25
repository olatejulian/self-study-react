import igniteLogo from '../assets/ignite-symbol.svg'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} />
            <h1>Ignite Feed</h1>
        </header>
    )
}
