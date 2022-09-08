import React, { useState } from 'react'
import styled from 'styled-components'

const InfoBoxDiv = styled.div`
  height: 25px;
  border-radius: 5px;
  text-align: center;
  font-size: 0.8em;
  font-weight: 500;
  padding: 3px 8px;
  color: white;
  margin: 10px;
  display: inline;
`

export default function InfoBox({ text, color }) {

  const infoBoxStyle = {
    backgroundColor: color
  }

  return (
    <InfoBoxDiv style={infoBoxStyle}>{ text }</InfoBoxDiv>
  )
}
