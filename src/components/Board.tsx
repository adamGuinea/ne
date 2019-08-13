import React from "react";

const Cell = ({ cell, id, game }) => {
  let boxStyle;

  if (cell === "player2") boxStyle = "player2-box-style";
  else if (cell === "player1") boxStyle = "player1-box-style";

  return (
    <td>
      <div className={"cell"} key={id} onClick={() => game(id)}>
        <div className={boxStyle} />
      </div>
    </td>
  );
};

const Board = ({ row, game }) => (
  <tr>
    {row &&
      row.map((cell, i) => {
        return <Cell cell={cell} id={i} key={i} game={game} />;
      })}
  </tr>
);

export default Board;
