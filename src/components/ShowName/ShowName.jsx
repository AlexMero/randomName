import React from 'react'

function ShowName({ underList, randomNumber, listNames, show }) {
  const listName = listNames[underList]
  const name = listName[randomNumber]
  return <span id="name">{show && name}</span>
}

export default ShowName
