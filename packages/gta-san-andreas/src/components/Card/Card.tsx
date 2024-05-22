import styles from './Card.module.css'

type CardProps = {
    image: any
}

export default function Card(props: CardProps) {
    const {image} = props

    return (
        <div className={styles.card}>
            <img
                className={styles['card-image']}
                src={image}
                alt="Error"
            ></img>
        </div>
    )
}
