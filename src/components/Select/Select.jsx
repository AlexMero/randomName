import React, { useState } from 'react'

function Select(props) {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState(props.gender)

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
    props.onHandleGender(value)
  }

  return (
    <div id="selectContainer">
      {showOptions ? (
        <div id="optionsContainer">
          <div className="option" onClick={() => handleOptionsClick('boy')}>
            Garçon
          </div>
          <div className="option" onClick={() => handleOptionsClick('girl')}>
            Fille
          </div>
        </div>
      ) : (
        <div className="select" onClick={() => handleClick()}>
          {translate[selectedOptions]}
        </div>
      )}
    </div>
  )
}

export default Select
