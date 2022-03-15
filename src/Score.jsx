import React from "react";

const Score = (props) => {
  return ( 
    <>
      <div>
        {props.scores.map(score => 
          <p>Date: {score.date} Score: {score.score}</p>
        )}
      </div>
    </>
  );
}


export default Score;