import React from 'react';

const BoxComponent = ({rowState, type, onBoxClick, colNum}) => {
  const boxes = rowState.map((box, i) => {
    return (
      <div key={i.toString()} id={`${colNum.toString()}-${i}`} className="box" onClick={onBoxClick}>
        {type[box]}
      </div>
    )
  })

  return (
    <div className='box_component'>
      {boxes}
    </div>
  )
}

export default BoxComponent