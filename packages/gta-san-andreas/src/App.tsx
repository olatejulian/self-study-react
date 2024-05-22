import {cheatCodes} from './app.constants.js'
import ContentArea from './components/ContentArea/ContentArea.js'
import Header from './components/Header/Header.js'
import './index.css'

export default function App() {
    const imageMapper: {[key: string]: string} = {
        up: 'src/assets/touch-top.svg',
        left: 'src/assets/touch-left.svg',
        down: 'src/assets/touch-bottom.svg',
        right: 'src/assets/touch-right.svg',
        triangle: 'src/assets/plain-triangle.svg',
        square: 'src/assets/plain-square.svg',
        x: 'src/assets/plain-cross.svg',
        circle: 'src/assets/plain-circle.svg',
        L1: 'src/assets/plain-L1.svg',
        L2: 'src/assets/plain-L2.svg',
        R1: 'src/assets/plain-R1.svg',
        R2: 'src/assets/plain-R2.svg',
    }

    const CheatCodesSorted = cheatCodes.sort((a, b) =>
        a.title.localeCompare(b.title)
    )

    return (
        <>
            <Header />
            <ContentArea
                cheatCodes={CheatCodesSorted.map(cheatCode => ({
                    ...cheatCode,
                    code: cheatCode.code.map(key => imageMapper[key]),
                }))}
            />
        </>
    )
}
