import React from 'react'

function ShowName({ gender, randomNumber, listNames, show }) {
  const listName = listNames[gender]
  const name = listName[randomNumber]
  return <span id="name">{show && name}</span>
}

export default ShowName
