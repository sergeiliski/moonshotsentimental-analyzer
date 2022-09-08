import React, { useState } from 'react'
import styled from 'styled-components'

const FlairDiv = styled.div`
  width: 125px;
  height: 25px;
  border-radius: 20px;
  text-align: center;
  font-size: 0.8em;
  font-weight: 500;
  padding: 3px 8px;
  color: white;
  margin: 10px 0;
`

export default function Flair({ text, color, style, isSelected, readOnly, event }) {
  const [selected, setSelected] = useState(typeof isSelected === 'undefined' ? true : isSelected)
  const toggleSelected = () => {
    if (!readOnly) {
      setSelected(!selected)
      event.call()
    }
  }

  const flairStyle = {
    backgroundColor: color,
    opacity: selected ? 1 : 0.6,
    ...style
  }

  return (
    <FlairDiv onClick={toggleSelected} style={flairStyle}>{ text }</FlairDiv>
  )
}
