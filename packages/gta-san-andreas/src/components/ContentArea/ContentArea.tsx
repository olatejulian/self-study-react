import {v4 as uuidv4} from 'uuid'
import Box from '../Box/Box.js'
import styles from './ContentArea.module.css'

interface ContentAreaProps {
    cheatCodes: Array<{title: string; code: string[]}>
}

export default function ContentArea(props: ContentAreaProps) {
    const {cheatCodes} = props

    return (
        <div className={styles['content-area']}>
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
