import React, { useState, useEffect } from 'react'
import Team from './Team'

const Board = () => {
  const [message, setMessage] = useState('')
  const [player1Name, setPlayer1Name] = useState('player1')
  const [player2Name, setPlayer2Name] = useState('player2')
  const [player1Points, setPlayer1Points] = useState(0)
  const [player2Points, setPlayer2Points] = useState(0)
  const [gameRunning, setGameRunning] = useState(false)

  const zeroMessage= "Love";
  const oneMessage = "Fifteen";
  const twoMessage = "Thirty";
  const threeMessage = "Forty";

  const checkPoints = (points) => {
    if (points <= 0) return 0
    return points
  }
  const incrementplayer1Points = () => {
    let actualPoints = player1Points
    actualPoints += 1
    setPlayer1Points(checkPoints(actualPoints))
  }
  const incrementplayer2Points = () => {
    let actualPoints = player2Points
    actualPoints += 1
    setPlayer2Points(checkPoints(actualPoints))
  }
  const decrementplayer1Points = () => {
    let actualPoints = player1Points
    actualPoints -= 1
    setPlayer1Points(checkPoints(actualPoints))
  }
  const decrementplayer2Points = () => {
    let actualPoints = player2Points
    actualPoints -= 1
    setPlayer2Points(checkPoints(actualPoints))
  }
  const resetPlayer1Points = () => {
    setPlayer1Points(0)
  }
  const resetPlayer2Points = () => {
    setPlayer2Points(0)
  }
    const getMessage = (points) => {
    switch (points) {
      case 0:
        return zeroMessage;
      case 1:
        return oneMessage;
      case 2:
        return twoMessage;
      case 3:
        return threeMessage;  
      default:
        return "You didn't player Score a valid number";
    }
  }
  const gerDifference = (player1Points,player2Points) => {
    const difference = player1Points > player2Points ? player1Points - player2Points : player2Points - player1Points;
    return difference;
  }
  useEffect(() => {
    const difference=gerDifference(player1Points,player2Points) ;
     if( (player1Points>=4 && player1Points >  player2Points) &&  difference >1 ){
          setMessage("Won for player1");
          setGameRunning(false);
    }
    else if( player2Points>=4 && player2Points >  player1Points &&  difference >1 ){
          setMessage("Won for player2");
          setGameRunning(false);
    }
    else if(player1Points==player2Points && player1Points!=0 && player2Points != 0 && (player1Points>=3 || player2Points >=3)){
          setMessage("Deuce");
    }else if( (player1Points>=3 && player2Points>=3 )&& player1Points >  player2Points &&  difference ==1){
        setMessage("Advantage for player1");
    }else if( (player2Points>=3 && player1Points>=3) &&  player2Points >  player1Points &&  difference ==1){
        setMessage("Advantage for player2");
    }else{
        const messageTotal= getMessage(player1Points) +"-"+ getMessage(player2Points);
        setMessage(messageTotal);
    }
    if(player1Points===0 && player2Points===0) setGameRunning(true)
    else setGameRunning(false)
  }, [player1Points, player2Points])


  return (
    <div className='single-board'>
      <div className='board-header'>
      <h1>Output: {message}</h1>
      </div>
      <Team
        team={{ name: player1Name, points: player1Points }}
        incrementPoints={incrementplayer1Points}
        decrementPoints={decrementplayer1Points}
        resetPoints={resetPlayer1Points} />
      <Team 
        team={{ name: player2Name, points: player2Points }}
        incrementPoints={incrementplayer2Points}
        decrementPoints={decrementplayer2Points}
        resetPoints={resetPlayer2Points} />
    </div>
  )
}

export default Board
