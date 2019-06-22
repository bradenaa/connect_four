import React from 'react';

const InfoComponent = ({turn, winner}) => {
  console.log(winner)
  return (
    <div className='info_component'>
      <h2>{`It's Player ${turn} turn`}</h2>
      {winner.length > 0 && (
        <h2>{`We have a winner! Player ${winner} wins!`}</h2>
      )}
    </div>
  )
}

export default InfoComponent