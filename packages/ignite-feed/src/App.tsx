import styles from './App.module.css'
import Header from './components/Header.tsx'
import Post from './components/Post.tsx'
import Sidebar from './components/Sidebar.tsx'

const posts: Array<{
    id: number
    author: {avatarUrl: string; name: string; role: string}
    content: Array<{type: 'paragraph' | 'link'; line: string}>
    publishedAt: Date
}> = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/olatejulian.png',
            name: 'Julian Olate',
            role: 'Full Stack software Engineer',
        },
        content: [
            {
                type: 'paragraph',
                line: 'Fala galeraa 👋',
            },
            {
                type: 'paragraph',
                line: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            {
                type: 'link',
                line: 'olatejulian.github.io/homepage',
            },
        ],
        publishedAt: new Date('2022-05-24 18:34:30'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/olatejulian.png',
            name: 'Julian Olate',
            role: 'Full Stack software Engineer',
        },
        content: [
            {
                type: 'paragraph',
                line: 'Fala galeraa 👋',
            },
            {
                type: 'paragraph',
                line: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            {
                type: 'link',
                line: 'olatejulian.github.io/homepage',
            },
        ],
        publishedAt: new Date('2022-05-24 18:34:30'),
    },
]

export default function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </div>
    )
}
