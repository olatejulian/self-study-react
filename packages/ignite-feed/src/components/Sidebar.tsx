import {PencilLine} from '@phosphor-icons/react/PencilLine'
import profileCover from '../assets/profile-banner.jpg'
import Avatar from './Avatar.tsx'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={profileCover} />
            <div className={styles.profile}>
                <Avatar src="https://github.com/olatejulian.png" />

                <strong>Julian Olate</strong>
                <span>@olatejulian</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit profile
                </a>
            </footer>
        </aside>
    )
}
