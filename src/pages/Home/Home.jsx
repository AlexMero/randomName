import React, { useState } from 'react'
import Select from '../../components/Select/Select'
import ShowName from '../../components/ShowName/ShowName'
import names from '../../ressources/babyNames'

export default function Home() {
  const [gender, setGender] = useState('boy')
  const [showName, setShowName] = useState(false)
  const [randomNumber, setRandomNumber] = useState(
    getRandomNumber(0, names[gender].length - 1)
  )

  const genderOptions = ['boy', 'girl']

  const handleGender = (value) => {
    setGender(value)
    setShowName(false)
  }

  const handleGenerateName = () => {
    setRandomNumber(getRandomNumber(0, names[gender].length - 1))
    setShowName(true)
  }

  return (
    <main>
      <h1>Générateur de nom aléatoire</h1>
      <Select
        onHandleGender={handleGender}
        gender={gender}
        options={genderOptions}
      />
      <p>
        Nom aléatoire :{' '}
        <ShowName gender={gender} show={showName} randomNumber={randomNumber} />
      </p>
      <button
        id="generateButton"
        onClick={() => {
          handleGenerateName()
        }}
      >
        Générer un nom
      </button>
    </main>
  )
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
