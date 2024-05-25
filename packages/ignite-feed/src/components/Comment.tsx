import {ThumbsUp} from '@phosphor-icons/react/dist/icons/ThumbsUp'
import {Trash} from '@phosphor-icons/react/dist/icons/Trash'
import Avatar from './Avatar.tsx'
import styles from './Comment.module.css'

export default function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar borderless src="https://github.com/olatejulian.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Julian Olate (you)</strong>
                            <time
                                title="May 24 at 18:34:30"
                                dateTime="2025-05-24 18:34:30"
                            >
                                Published 1 hour ago
                            </time>
                        </div>

                        <button title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Like
                        <span>42</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
