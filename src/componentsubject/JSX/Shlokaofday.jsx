import React from 'react'
import "../CSS/Shloka.css"
import shloka from "../data/shloka.json"

const Shlokaofday = () => {

  const speakplease = () => {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.text = "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ";
    msg.lang = "hi"
    // speechSynthesis.getVoices().forEach(function(voice) {
    //     console.log(voice.name, voice.default ? voice.default :'');
    //   });
    window.speechSynthesis.speak(msg);
}

  return (<div className='shloka-component-holder'>
      <div className="shloka-body container">
      <h2> श्लोक</h2>
      <button onClick={speakplease} className="shloka-speaker">Speak</button>
      <div className="shloka-heading">{shloka.shlok}</div>
      <h3>अर्थात्</h3>
      <div className="shloka-artharth">{shloka.artharth}</div>
      </div>
      <div className="shloka-image">
       <img src="https://new-img.patrika.com/upload/2019/06/21/1_16.jpg" alt="image" />    
      </div>
  </div>
  )
}

export default Shlokaofday