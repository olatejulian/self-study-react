import {v4 as uuidv4} from 'uuid'
import Card from '../Card/Card.js'
import styles from './Row.module.css'

interface RowProps {
    items: string[]
}
export default function Row(props: RowProps) {
    const {items} = props

    return (
        <div className={styles.row}>
            {items.map(item => (
                <Card key={uuidv4()} image={item} />
            ))}
        </div>
    )
}
