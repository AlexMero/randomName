import React, { useState } from 'react'

function Select({ onHandleGender, gender, options }) {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState(gender)

  const translate = {
    boy: 'Garçon',
    girl: 'Fille',
  }

  const handleClick = () => {
    setShowOptions(!showOptions)
  }

  const handleOptionsClick = (value) => {
    setSelectedOptions(value)
    setShowOptions(false)
    onHandleGender(value)
  }

  const optionsDiv = options.map((opt) => (
    <div
      key={opt}
      className="option"
      onClick={() => handleOptionsClick({ opt })}
    >
      {opt}
    </div>
  ))

  return (
    <div id="selectContainer">
      {showOptions ? (
        <div id="optionsContainer">{optionsDiv}</div>
      ) : (
        <div className="select" onClick={() => handleClick()}>
          {translate[selectedOptions]}
        </div>
      )}
    </div>
  )
}

export default Select
