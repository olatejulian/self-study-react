import {v4 as uuid} from 'uuid'
import circle from '../../assets/circle.jpg'
import square from '../../assets/square.png'
import triangle from '../../assets/triangle.png'
import x from '../../assets/x.jpg'
import Card from '../Card/Card.js'
import {data} from '../cheats.data.js'
import styles from './Row.module.css'

const imageMapper: {[key: string]: string} = {
    up: '🔼',
    left: '◀️',
    down: '🔽',
    right: '▶️',
    triangle: triangle,
    square: square,
    x: x,
    circle: circle,
    L1: 'L1',
    L2: 'L2',
    R1: 'R1',
    R2: 'R2',
}
const items: Array<{title: string; code: string[]}> = data

export default function Row() {
    return (
        <div className={styles.row}>
            {items.map(cheat => {
                return (
                    <>
                        <h1 className={styles.title}>{cheat.title}</h1>
                        <div className={styles['card-container']}>
                            {cheat.code.map(value => (
                                <Card key={uuid()} image={imageMapper[value]} />
                            ))}
                        </div>
                    </>
                )
            })}
        </div>
    )
}
