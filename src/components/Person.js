import React, { useState } from 'react'

const PersonCard = (props) => {
    const [age, setAge] = useState(props.initialAge)

    return (
        <div>
            <h2> { props.lastName }, { props.firstName }</h2>
            <p> AKA: { props.aka } </p>
            <p> Age: { age } </p>
            <p> Hair: { props.hairColor } </p>
            <p> Eyes: { props.eyeColor } </p>
            <p> Super Power: { props.superPower } </p>
            <button onClick = { (event) => setAge (age + 1)}>Happy Birthday, { props.firstName }! </button>
        </div>
    )
}

export default PersonCard
