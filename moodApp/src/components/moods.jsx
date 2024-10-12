import React, { useState } from 'react';

const firstMood = "Dont know how I am feeling today!!";

const happyMood = "Im so happy :)";

const sadMood = "Im so sad";

function MoodsApp() {

const [mood, setMood] = useState(firstMood);

  const makeHappy = () => {

    setMood(happyMood);
  };

  const makeSad = () => {

    setMood(sadMood);

  };

  const makeReset = () => {

    setMood(firstMood);

  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: mood === happyMood ? 'royalblue' : 'crimson',
  };

  return (

    <div className="widget-moods container">
      <h2>Moods</h2>
      <div id="mood" style={stil}>
        {mood}
      </div>
      
            <button id="makeHappy" onClick={makeHappy}>
                Make Happy
            </button>
            <button id="makeSad" onClick={makeSad}>
                Make Sad
            </button>
            <button id="resetMood" onClick={makeReset}>
                Reset Mood
            </button>
      
    </div>
  );
}

export default MoodsApp;



