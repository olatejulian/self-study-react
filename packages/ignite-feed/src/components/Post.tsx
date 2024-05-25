import Avatar from './Avatar.tsx'
import Comment from './Comment.tsx'
import styles from './Post.module.css'

export default function Post({
    author,
    content,
    publishedAt,
}: {
    author: {
        avatarUrl: string
        name: string
        role: string
    }
    content: Array<{type: 'paragraph' | 'link'; line: string}>
    publishedAt: Date
}) {
    function handleCreateNewComment() {
        event?.preventDefault()
        console.log('New comment')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/olatejulian.png" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedAt.toString()}
                    dateTime={publishedAt.toISOString()}
                >
                    {new Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    }).format(publishedAt)}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.line}</p>
                    } else if (line.type === 'link') {
                        return (
                            <p>
                                <a href="#">#{line.line}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Write a comment</strong>
                <textarea
                    placeholder="Write a comment"
                    onSubmit={handleCreateNewComment}
                />
                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
