import {v4 as uuidv4} from 'uuid'
import Row from './Row.js'

interface BoxProps {
    title: string
    items: string[]
}

export default function Box(props: BoxProps) {
    const {title, items} = props

    return (
        <div className="box">
            <h2 className="title">{title}</h2>
            <Row key={uuidv4()} items={items} />
        </div>
    )
}
