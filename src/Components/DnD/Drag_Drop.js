import React from 'react';
import Board from './Board';
import Card from './Card';

const Drag_Drop = () => {
  return (
    <div className="flexbox">
      <Board id="board-1" className="board">
        <Card id="card-1-1" className="card" draggable="true">
          <p>Card One-1</p>
        </Card>
        <Card id="card-1-2" className="card" draggable="true">
          <p>Card One-2</p>
        </Card>
        <Card id="card-1-3" className="card" draggable="true">
          <p>Card One-3</p>
        </Card>
      </Board>

      <Board id="board-2" className="board">
        <Card id="card-2-1" className="card" draggable="true">
          <p>Card two-1</p>
        </Card>
        <Card id="card-2-2" className="card" draggable="true">
          <p>Card two-2</p>
        </Card>
        <Card id="card-2-3" className="card" draggable="true">
          <p>Card two-3</p>
        </Card>
      </Board>
    </div>
  )
};

export default Drag_Drop;
