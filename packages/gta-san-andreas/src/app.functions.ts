export function cheatCodesParser(
    cheatCodes: Array<{title: string; code: string[]}>
) {
    const imageMapper: {[key: string]: string} = {
        circle: '/plain-circle.svg',
        x: '/plain-cross.svg',
        down: '/touch-bottom.svg',
        left: '/touch-left.svg',
        right: '/touch-right.svg',
        up: '/touch-top.svg',
        L1: '/plain-L1.svg',
        L2: '/plain-L2.svg',
        R1: '/plain-R1.svg',
        R2: '/plain-R2.svg',
        square: '/plain-square.svg',
        triangle: '/plain-triangle.svg',
    }

    return cheatCodes
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(cheatCode => ({
            ...cheatCode,
            code: cheatCode.code.map(key => imageMapper[key]),
        }))
}
