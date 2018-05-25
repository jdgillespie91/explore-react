import React from 'react'
import styles from './boardStyles'

const Board = () => (
  <div style={styles.app}>
    <div style={styles.board} >
      {Array(900).fill(0).map((_, index) =>
        <div key={index} style={styles.inactiveCell} />
      )}
    </div>
  </div>
)

export default Board
