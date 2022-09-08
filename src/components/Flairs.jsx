import React from 'react'
import Flair from './Flair'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Flairs({ style, flairs, parentCallback }) {

  const listGroupStyleRow = {
    flexDirection: 'row',
    ...style
  }

  const listGroupStyleColumn = {
    flexDirection: 'column',
    ...style
  }

  const flairStyleRow = {
    margin: '10px',
    cursor: 'pointer'
  }

  const flairStyleColumn = {
    margin: '10px 0',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: '1.0em'
  }
  
  function onClick(idx) {
    flairs[idx].selected = !flairs[idx].selected
    parentCallback(flairs)
  }


  return (
    <React.Fragment>
      <ListGroup className="d-none d-sm-flex" style={listGroupStyleRow}>
        {flairs.map((flair, i) => (
          <Flair key={i} event={() => { onClick(i) }} isSelected={flair.selected} style={flairStyleRow} text={flair.text} color={flair.color} />
        ))}
      </ListGroup>
      <ListGroup className="d-block d-sm-none" style={listGroupStyleColumn}>
        {flairs.map((flair, i) => (
          <Flair key={i} event={() => { onClick(i) }} isSelected={flair.selected} style={flairStyleColumn} text={flair.text} color={flair.color} />
        ))}
      </ListGroup>
    </React.Fragment>
  )
}
