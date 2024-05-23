import {v4 as uuidv4} from 'uuid'
import Box from './Box.js'

interface ContentAreaProps {
    cheatCodes: Array<{title: string; code: string[]}>
}

export default function ContentArea(props: ContentAreaProps) {
    const {cheatCodes} = props

    return (
        <div className="content-area">
            <h1>Trapaças do GTA San Andreas para PS2</h1>
            {cheatCodes.map(cheatCode => {
                return (
                    <Box
                        key={uuidv4()}
                        title={cheatCode.title}
                        items={cheatCode.code}
                    />
                )
            })}
        </div>
    )
}
