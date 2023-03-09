import React, { useState } from 'react'
import Select from '../../components/Select/Select'
import ShowName from '../../components/ShowName/ShowName'
import babyNames from '../../ressources/babyNames'
import dogsName from '../../ressources/dogsName'
import pseudosAnime from '../../ressources/pseudosAnime'
import pseudosVideoGames from '../../ressources/pseudosVideogames'
import pseudosMovies from '../../ressources/pseudosMovies'

export default function Home() {
  const [type, setType] = useState('baby')
  const [univers, setUnivers] = useState('anime')
  let names
  switch (type) {
    case 'baby':
      names = babyNames
      break
    case 'dogs':
      names = dogsName
      break
    case 'pseudos':
      switch (univers) {
        case 'anime':
          names = pseudosAnime
          break
        case 'videogames':
          names = pseudosVideoGames
          break
        case 'movies':
          names = pseudosMovies
          break
        default:
          names = pseudosAnime
          break
      }
      break
    default:
      names = babyNames
  }

  const [gender, setGender] = useState('boy')
  const [showName, setShowName] = useState(false)
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
    if (type === 'pseudos') {
      setRandomNumber(getRandomNumber(0, names[univers].length - 1))
    }
  }

  const handleGenerateName = () => {
    setRandomNumber(getRandomNumber(0, names[gender].length - 1))
    setShowName(true)
  }

  const handleUnivers = (value) => {
    setUnivers(value)
    setShowName(false)
  }

  const universSelect = (
    <Select
      key={'univers'}
      onHandleChoose={handleUnivers}
      options={['anime', 'videogames', 'movies']}
      selectedOption={univers}
    />
  )

  return (
    <main>
      <h1>Générateur de nom aléatoire</h1>
      <div id="selectContainer">
        <Select
          key={'gender'}
          onHandleChoose={handleGender}
          options={['boy', 'girl']}
          selectedOption={gender}
        />
        <Select
          key={'type'}
          onHandleChoose={handleType}
          options={['baby', 'dogs', 'pseudos']}
          selectedOption={type}
        />
        {type === 'pseudos' ? universSelect : ''}
      </div>
      <p>
        Nom aléatoire :{' '}
        <ShowName
          gender={gender}
          show={showName}
          randomNumber={randomNumber}
          listNames={names}
        />
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
