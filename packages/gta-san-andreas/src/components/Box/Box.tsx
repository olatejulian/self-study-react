import Row from '../Row/Row.js'

interface BoxProps {
    title: string
    items: string[]
}
export default function Box(props: BoxProps) {
    const title = props.title
    const items = props.items

    return (
        <div>
            <h2>{title}</h2>
            <Row items={items} />
        </div>
    )
}
