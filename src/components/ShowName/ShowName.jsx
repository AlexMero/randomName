import React from 'react'
import names from '../../ressources/names'

function ShowName(props) {
  const gender = props.gender
  const listName = names[gender]
  const name = listName[props.randomNumber]
  return <span id="name">{props.show && name}</span>
}

export default ShowName
