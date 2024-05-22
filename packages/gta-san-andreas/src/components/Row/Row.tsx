import {v4 as uuidv4} from 'uuid'
import Card from '../Card/Card.js'
interface RowProps {
    items: string[]
}
export default function Row(props: RowProps) {
    const items = props.items

    return (
        <div>
            {items.map(item => (
                <Card key={uuidv4()} image={item} />
            ))}
        </div>
    )
}
