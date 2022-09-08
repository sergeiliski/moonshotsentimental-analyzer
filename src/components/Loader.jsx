import React from "react"
import ContentLoader from "react-content-loader"

export default function Loader(props) {
  const styleLoader = {
    margin: '10px 0 0 0'
  }
  return (
    <ContentLoader
      style={styleLoader}
      speed={2}
      width={1050}
      height={150}
      viewBox="0 0 1050 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="20" y="10" rx="5" ry="5" width="800" height="20" /> 
      <rect x="20" y="40" rx="5" ry="5" width="150" height="15" /> 
      <rect x="20" y="70" rx="5" ry="5" width="600" height="15" /> 
      <rect x="20" y="120" rx="5" ry="5" width="600" height="15" /> 
      <rect x="950" y="15" rx="0" ry="0" width="100" height="100" />
    </ContentLoader>
  )
}
