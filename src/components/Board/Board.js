import React from 'react'
import styles from './boardStyles'

const Board = () => {
  const board = new Array(1200)
  board.fill(0)
  console.log(board)

  return (
    <div style={styles.app}>
      <div style={styles.board}>
        {Array(1200).fill(0).map((_, index) =>
          <div key={index} style={styles.inactiveCell} />
        )}
      </div>
    </div>
  )
}

export default Board
