import {v4 as uuidv4} from 'uuid'
import Row from '../Row/Row.js'
import styles from './Box.module.css'

interface BoxProps {
    title: string
    items: string[]
}

export default function Box(props: BoxProps) {
    const {title, items} = props

    return (
        <div className={styles.box}>
            <h2 className={styles['box-title']}>{title}</h2>
            <Row key={uuidv4()} items={items} />
        </div>
    )
}
