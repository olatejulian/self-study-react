import styles from './Avatar.module.css'

export default function Avatar({
    borderless = false,
    src,
}: {
    borderless?: boolean
    src: string
}) {
    return (
        <img
            className={
                styles.avatar + (borderless ? '' : ' ' + styles.withBorder)
            }
            src={src}
        />
    )
}
