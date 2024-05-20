import React, {useState} from 'react'

export default function MyComponent() {
    const [name, setName] = useState('Default Name')

    const updateName = () => {
        setName('John Doe')
    }

    const [age, setAge] = useState(0)

    const incrementAge = () => {
        setAge(age + 1)
    }

    const [isAlive, setIsAlive] = useState(true)

    const killOrRevive = () => {
        setIsAlive(!isAlive)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Is Alive? {isAlive ? 'Yes' : 'No'}</p>
            <button onClick={killOrRevive}>
                {isAlive ? 'Kill' : 'Revive'}
            </button>
        </div>
    )
}
