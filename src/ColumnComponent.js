import React, {Fragment} from 'react';
import BoxComponent from './BoxComponent'

const ColumnComponent = ({ boardState, type, onBoxClick }) => {

  const columns = boardState.map((row, i) => {
    return (
      <BoxComponent
        key={i.toString()}
        colNum={i}
        rowState={row}
        type={type}
        onBoxClick={onBoxClick}
      />
    )
  })

  return (
    <div className='row_component'>
      {columns}
    </div>
  )
}

export default ColumnComponent