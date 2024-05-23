import {cheatCodes} from './app.constants.js'
import {cheatCodesParser} from './app.functions.js'
import ContentArea from './components/ContentArea.js'

export default function App() {
    return (
        <>
            <ContentArea cheatCodes={cheatCodesParser(cheatCodes)} />
        </>
    )
}
