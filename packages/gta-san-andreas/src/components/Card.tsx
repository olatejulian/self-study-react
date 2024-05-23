type CardProps = {
    image: any
}

export default function Card(props: CardProps) {
    const {image} = props

    return (
        <div className="card">
            <img className="image" src={image} alt="Error"></img>
        </div>
    )
}
