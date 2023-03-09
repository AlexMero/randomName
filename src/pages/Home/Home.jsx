import React, { useState } from 'react'
import Select from '../../components/Select/Select'
import ShowName from '../../components/ShowName/ShowName'
import babyNames from '../../ressources/babyNames'
import dogsName from '../../ressources/dogsName'
import pseudos from '../../ressources/pseudos'

export default function Home() {
  const [type, setType] = useState('baby')
  let names
  switch (type) {
    case 'baby':
      names = babyNames
      break
    case 'dogs':
      names = dogsName
      break
    case 'pseudos':
      names = pseudos
      break
    default:
      names = babyNames
  }

  const [gender, setGender] = useState('boy')
  const [showName, setShowName] = useState(false)
  const [univers, setUnivers] = useState('anime')
  const [randomNumber, setRandomNumber] = useState(
    getRandomNumber(0, names[gender].length - 1)
  )

  const handleGender = (value) => {
    setGender(value)
    setShowName(false)
  }

  const handleType = (value) => {
    setType(value)
    setShowName(false)
  }

  const handleGenerateName = () => {
    setRandomNumber(getRandomNumber(0, names[gender].length - 1))
    setShowName(true)
  }

  const handleUnivers = (value) => {
    setUnivers(value)
    setShowName(false)
  }

  let specificSelect = (
    <Select
      key={'gender'}
      onHandleChoose={handleGender}
      options={['boy', 'girl']}
      selectedOption={gender}
    />
  )
  let showSpan = (
    <ShowName
      underList={gender}
      show={showName}
      randomNumber={randomNumber}
      listNames={names}
    />
  )
  if (type === 'pseudos') {
    specificSelect = (
      <Select
        key={'univers'}
        onHandleChoose={handleUnivers}
        options={['anime', 'videogames', 'movies']}
        selectedOption={univers}
      />
    )
    showSpan = (
      <ShowName
        underList={univers}
        show={showName}
        randomNumber={randomNumber}
        listNames={names}
      />
    )
  }

  return (
    <main>
      <h1>Générateur de nom aléatoire</h1>
      <div id="selectContainer">
        {specificSelect}
        <Select
          key={'type'}
          onHandleChoose={handleType}
          options={['baby', 'dogs', 'pseudos']}
          selectedOption={type}
        />
      </div>
      <p>Nom aléatoire : {showSpan}</p>
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
