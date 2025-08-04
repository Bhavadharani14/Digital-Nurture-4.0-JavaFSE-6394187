import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Pant', 'Surya'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Karun Nair'];

  const allPlayers = [...T20players, ...RanjiPlayers];

  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Even Team Players:</h2>
      {evenTeam.map((player, index) => <p key={index}>{player}</p>)}

      <h2>Odd Team Players:</h2>
      {oddTeam.map((player, index) => <p key={index}>{player}</p>)}
    </div>
  );
};

export default IndianPlayers;
