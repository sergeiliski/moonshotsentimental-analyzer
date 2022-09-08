import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from { transform: rotate(0deg) };
  to { transform: rotate(360deg) };
`
// animation: ${spin} 5s linear infinite;
const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`

export default function Logo() {
  // https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg
  return (
    <LogoImage
      src="https://styles.redditmedia.com/t5_9e4pv/styles/communityIcon_vsa30gnhaqn61.jpg"
      // className="d-inline-block align-top"
      alt="React Bootstrap logo"
    />
  )
}
