import React, { useState } from 'react'

function Select({ onHandleChoose, options, selectedOption = options[0] }) {
  const [showOptions, setShowOptions] = useState(false)

  const translate = {
    boy: 'Garçon',
    girl: 'Fille',
    baby: 'Bébé',
    dogs: 'Chien',
    pseudos: 'Pseudo',
    anime: 'Animé',
    videogames: 'Jeu vidéo',
    movies: 'Films',
  }

  const handleClick = () => {
    setShowOptions(!showOptions)
  }

  const handleOptionsClick = (target) => {
    setShowOptions(false)
    onHandleChoose(target.opt)
  }

  const optionsDiv = options.map((opt) => (
    <div
      key={opt}
      className="option"
      onClick={() => handleOptionsClick({ opt })}
    >
      {translate[opt]}
    </div>
  ))

  return (
    <div className="selectContainer">
      {showOptions ? (
        <div id="optionsContainer">{optionsDiv}</div>
      ) : (
        <div className="select" onClick={() => handleClick()}>
          {translate[selectedOption]}
        </div>
      )}
    </div>
  )
}

export default Select
