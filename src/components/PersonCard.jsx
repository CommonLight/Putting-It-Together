import React, { useState } from 'react'
import lukeProfile from '../imgs/LukeFINAL.png'
import jasProfile from '../imgs/JasFINAL.png'
import sethProfile from '../imgs/SethFINAL.png'
import bellaProfile from '../imgs/BellaFINAL.png'
import caedProfile from '../imgs/CaedFINAL.png'
import lucyProfile from '../imgs/LucyFINAL.png'
import jayceProfile from '../imgs/JayceFINAL.png'
import claireProfile from '../imgs/ClaireFINAL.png'

const PersonCard = (props) => {
    const [age, setAge] = useState(props.initialAge)

    return (
        <div>
            <h2> { props.lastName }, { props.firstName }</h2>
            <img src= {lukeProfile} alt="Luke Erickson" />
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
