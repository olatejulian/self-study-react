import Button from './Button'
import Card from './Card'
import Food from './Food'
import Footer from './Footer'
import Header from './Header'
import List from './List'
import MyComponent from './MyComponent'
import ProfilePicture from './ProfilePicture'
import Student from './Student'
import UserGreeting from './UserGreeting'

export default function App() {
    const fruits = [
        {id: 1, name: 'apple', calories: 95},
        {id: 2, name: 'orange', calories: 45},
        {id: 3, name: 'coconut', calories: 105},
        {id: 4, name: 'pineapple', calories: 37},
    ]

    return (
        <>
            <Header />
            <List items={fruits} category="Fruits" />
            <UserGreeting isLoggedIn={true} username="Julian" />
            <Student name="Julian" age={30} isStudent={true} />
            <Card />
            <Food />
            <Button />
            <ProfilePicture />
            <MyComponent />
            <Footer />
        </>
    )
}
