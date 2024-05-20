import styles from './Button.module.css'

export default function Button() {
    const buttonTextContent = 'Click me 😊'

    let count = 1

    const handleClick = e => {
        e.target.textContent = `Clicked times: ${count++}`
    }

    return (
        <button className={styles.button} onClick={e => handleClick(e)}>
            {buttonTextContent}
        </button>
    )
}
