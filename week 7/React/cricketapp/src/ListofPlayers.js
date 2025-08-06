import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 80 },
    { name: 'Rohit', score: 65 },
    { name: 'Dhoni', score: 90 },
    { name: 'Jadeja', score: 45 },
    { name: 'Pant', score: 75 },
    { name: 'Rahul', score: 30 },
    { name: 'Shami', score: 85 },
    { name: 'Bumrah', score: 95 },
    { name: 'Kohli', score: 60 },
    { name: 'Surya', score: 77 },
    { name: 'Hardik', score: 66 },
  ];

  const filtered = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

      <h2>Players with Score &lt; 70:</h2>
      {filtered.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
