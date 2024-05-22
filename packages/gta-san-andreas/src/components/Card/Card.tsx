import styles from './Card.module.css'

type CardProps = {
    image: any
}

export default function Card(props: Readonly<CardProps>) {
    return (
        <div className={styles.card}>
            <img
                className={styles['card-image']}
                src={props.image}
                alt="Error"
            ></img>
        </div>
    )
}
